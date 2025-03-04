import { useState } from "react";
import { seminars as list } from "../../../../seminars.json";
import Seminar from "./Seminar/Seminar";
import "./seminars.css";
import Modal from "../../common/modal/Modal";
import GetFormModal from "../../common/FormModal";
import Button from "../../common/Button/Button";
import fetchSeminars from "../../common/fetchData";
import conversionData from "../../common/conversionData";

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
    e.preventDefault();
    const fixedForm = e.target as HTMLFormElement;
    const dataSend: Record<string, string> = {};
    for (let i=0; i < fixedForm.length; i++) {
      const element = fixedForm.elements[i] as HTMLInputElement;
      if(element.name === "date") {
        dataSend[element.name] = conversionData(element.value);  
      } else {
        dataSend[element.name] = element.value;
      } 
    }
    fetchSeminars({method: 'PUT', data: dataSend});
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
