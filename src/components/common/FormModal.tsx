import { useEffect, useState } from "react";
import { seminars as list } from "../../../seminars.json";
import Button from "./Button/Button";

type TformModal = {
  id: string;
  passFunc: (e: React.FormEvent<HTMLFormElement>) => void;
};
export default function GetFormModal({ id, passFunc }: TformModal) {
  const seminar = id ? list.find((item) => item.id === Number(id)) : null;
  const [dataSeminar, setDataSeminar] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    time: "",
    photo: "",
  });
  useEffect(() => {
    if (seminar) {
      setDataSeminar({
        id: seminar.id.toString(),
        title: seminar.title,
        description: seminar.description,
        date: seminar.date,
        time: seminar.time,
        photo: seminar.photo,
      });
    }
  }, [seminar]);
  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    passFunc(e);
  }
  return (
    <form className="form-modal" name="formM" onSubmit={handlerSubmit}>
      <input type="hidden" name="id" value={dataSeminar.id} required />
      <label htmlFor="title">Название семинара</label>
      <input
        type="text"
        name="title"
        value={dataSeminar.title}
        onChange={(e) =>
          setDataSeminar({ ...dataSeminar, title: e.target.value })
        }
        required
      />
      <label htmlFor="description">Описание семинара</label>
      <textarea
        name="description"
        value={dataSeminar.description}
        onChange={(e) =>
          setDataSeminar({ ...dataSeminar, description: e.target.value })
        }
        required
      />
      <label htmlFor="date">Дата семинара</label>
      <input
        type="date"
        name="date"
        value={dataSeminar.date}
        onChange={(e) =>
          setDataSeminar({ ...dataSeminar, date: e.target.value })
        }
        required
      />
      <label htmlFor="time">Время семинара</label>
      <input
        type="time"
        name="time"
        value={dataSeminar.time}
        onChange={(e) =>
          setDataSeminar({ ...dataSeminar, time: e.target.value })
        }
        required
      />
      <label htmlFor="photo">Фото семинара</label>
      <input
        type="text"
        name="photo"
        value={dataSeminar.photo}
        onChange={(e) =>
          setDataSeminar({ ...dataSeminar, photo: e.target.value })
        }
        required
      />
      {id ? (
        <Button url="" name="Изменить семинар" />
      ) : (
        <Button url="" name="Добавить семинар"/>
      )}
    </form>
  );
}
