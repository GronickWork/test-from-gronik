import { useState } from "react";
import { seminars as list } from "../../../../seminars.json";
import Seminar from "./Seminar/Seminar";
import "./seminars.css";
import Modal from "../../common/modal/Modal";
import GetFormModal from "../../common/FormModal";
import Button from "../../common/Button/Button";
import fetchSeminars from "../../common/fetchData";

export default function Seminars() {
  const [modalActive, setModalActive] = useState(false);
  const [headerModal, setHeaderModal] = useState({
    header: "",
    id: "",
    title: "",
  });
  const [name, setName] = useState("");
  const [listSeminars, setListSeminars] = useState([{}]);
  const [statusVarLoad, setStatusVarLoad] = useState(false);
  const dataSend: Record<string, string> = {};
  fetchSeminars({method : ''})
    .then((resp: { seminars: []; })=> setListSeminars(resp.seminars))
    .catch(err=>{ console.error(err); setListSeminars(list); setStatusVarLoad(true);});

  function handlerOpen() {
    setModalActive(!modalActive);
  }
  function handlerName({
    name,
    id,
    title,
  }: {
    name: string;
    id: string;
    title: string;
  }) {
    setHeaderModal({ header: name, id: id, title: title });
    setName(name);
    setModalActive(true);
  }

  function seminarDelete() {
    const seminarId = headerModal.id;
    dataSend.method = 'DELETE'; // Да!!!! Сервер наш настроен именно таким образом!!!!!!
    dataSend.id = seminarId;
    fetchSeminars({method: 'PUT', data: dataSend});
    setModalActive(false);
  }

  function seminarFix(e: React.FormEvent<HTMLFormElement>) {
    const seminarId = headerModal.id;
    const fixedForm = e.target as HTMLFormElement;
    const sendForm = new FormData(fixedForm); 
    console.log(`изменение семинара с id: ${seminarId}`);
    console.log(`description: ${sendForm.get("description")} id: ${sendForm.get("id")}`);
    setModalActive(false);
  }
  return (
    <div className="seminars">
      {statusVarLoad && <h3>Загрузка c севера не удалсь. Данные загружены из файла seminars.json</h3>  }
      {listSeminars.map((item, index) => {
        return <Seminar id={0} title={""} description={""} date={""} time={""} photo={""} key={index} giveData={handlerName} {...item} />;
      })}
      {modalActive &&
        (name === "Удалить" ? (
          <Modal
            toggle={handlerOpen}
            name={headerModal}
            children={<Button onClick={seminarDelete} name="Удалить семинар"/>}
          />
        ) : (
          <Modal toggle={handlerOpen} name={headerModal}>
            <GetFormModal id={headerModal.id} passFunc={seminarFix} />
          </Modal>
        ))}
    </div>
  );
}
