const http = require("http");
const koaBode = require("koa-body").default;
const cors = require("koa-cors");
const Koa = require("koa");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = new Koa();

app.use(
  koaBode({
    urlencoded: true,
    json: true,
    multipart: true,
  })
);

app.use(cors());

app.use(async (ctx, next) => {
  const recData = ctx.request.body;
  const dataSeminarsJson = fs.readFileSync("seminars.json");
  const dataSeminars = JSON.parse(dataSeminarsJson);
  switch (ctx.request.method) {
    case "GET":
      try {
        ctx.response.body = dataSeminarsJson;
      } catch (err) {
        console.error(err);
      }
      break;
    case "POST":
      if (
        !recData.title ||
        !recData.description ||
        !recData.photo ||
        !recData.date ||
        !recData.time
      ) {
        ctx.status = 400;
        ctx.error = "Действие не возможно. Данных для записи не достаточно.";
        break;
      }
      recData.id = uuidv4(6);
      
      dataSeminars.seminars.push(recData);
      fs.writeFileSync("seminars.json", JSON.stringify(dataSeminars, null, 2));
      ctx.response.body = recData;
      break;
    case "PUT":
      if (!recData.id) {
        ctx.status = 400;
        ctx.error =
          "Действие не возможно. Не достаточно данных для данной операции.";
        break;
      }
      const { id, title, description, photo, date, time, method } = recData;
      const change = dataSeminars.seminars.find((item) => item.id === id);
      const index = dataSeminars.seminars.findIndex((item) => item.id === id);
      if (index === -1) {
        ctx.status = 400;
        ctx.error = "Действие не возможно. Такой семинар не зарегистрирован.";
        break;
      }
      if (method === "DELETE") {
        dataSeminars.seminars.splice(index, 1);
        fs.writeFileSync(
          "seminars.json",
          JSON.stringify(dataSeminars, null, 2)
        );
        ctx.response.body = fs.readFileSync("seminars.json");
        break;
      }
      if (title) {
        change.title = title;
      }
      if (description) {
        change.description = description;
      }
      if (photo) {
        change.photo = photo;
      }
      if (date) {
        change.date = date;
      }
      if (time) {
        change.time = time;
      }
      dataSeminars.seminars.splice(index, 1, change);
      fs.writeFileSync("seminars.json", JSON.stringify(dataSeminars, null, 2));
      ctx.response.body = fs.readFileSync("seminars.json");
      break;
    default:
      break;
  }
  await next();
});

const port = process.env.PORT || 8088;
http.createServer(app.callback()).listen(port, (err) => {
  if (err) {
    return console.log(`string75 ${err}.`);
  }
  console.log(`Сервер запущен на порту №${port}.`);
});
