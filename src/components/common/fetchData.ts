const urlServer = "http://localhost:8080";

type TfetchSem = {
  method?: string,
  data?: object,
}
export default async function fetchSeminars({method, data}: TfetchSem) {
  if (!method) {
    const response = await fetch(urlServer);
    if (!response.ok) {
      return `HTTP error! status: `;
    } else {
      return response.json();
    }
  }
  switch (method) {
    case "POST":
      return await fetch(`${urlServer}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    case "PUT":
      return await fetch(urlServer, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    case "DELETE":
      return await fetch(urlServer, {
        method: "DELETE",
        body: JSON.stringify(data), 
      });
    default:
      return null;
  }
}
