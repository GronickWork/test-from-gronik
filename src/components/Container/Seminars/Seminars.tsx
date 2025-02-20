import { useState } from "react";
import { seminars as list } from "../../../../seminars.json";
import Seminar from "./Seminar/Seminar";
import "./seminars.css";
import Modal from "../../common/modal/Modal";
import GetFormModal from "../../common/formModal";
import Button from "../../common/Button/Button";

export default function Seminars() {
  const [modalActive, setModalActive] = useState(false);
  const [headerModal, setHeaderModal] = useState({
    header: "",
    id: "",
    title: "",
  });
  const [name, setName] = useState("");
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
    console.log(`удаление семинара с id: ${seminarId} из списка`);
    setModalActive(false);
  }

  function seminarFix() {
    const seminarId = headerModal.id;
    console.log(`изменение семинара с id: ${seminarId}`);
    setModalActive(false);
  }
  return (
    <div className="seminars">
      {list.map((item, index) => {
        return <Seminar key={index} giveData={handlerName} {...item} />;
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
