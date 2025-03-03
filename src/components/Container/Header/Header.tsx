import "./header.css";
import Button from "../../common/Button/Button";
import { useState } from "react";
import Modal from "../../common/modal/Modal";
import GetFormModal from "../../common/FormModal";
import fetchSeminars from "../../common/fetchData";
import conversionData from "../../common/conversionData";

export default function Header() {
  const [statusModal, setStatusModal] = useState(false);

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = document.forms.namedItem("formM") as HTMLFormElement;
    const dataSend: Record<string, string> = {};
    /**
     * * Заполняем объект dataSend данными из формы и только в таком виде!!! Form наш сервер обрабатыать не умеет!!!!!
     */
    for(let i = 1; i < form.length; i++) {
      const element = form.elements[i] as HTMLInputElement;
      if(element.name) {
        if(element.name === "date") {console.log(`Date: ${conversionData(element.value)} `)}
        dataSend[element.name] = element.value;
      }
    }
    console.log(dataSend);
    //fetchSeminars({method: "POST", data: dataSend});
    setStatusModal(false);
  }
  function handlerClose() {
    setStatusModal(false);
  }
  return (
    <header className="header">
      <h3 className="header-h3">Расписание семинаров</h3>
      <Button name="Добавить семинар" onClick={() => setStatusModal(true)} />
      {statusModal && (
        <Modal toggle={handlerClose} name={{ header: "Добавить семинар", id: "", title: "" }}>
          <GetFormModal id="" passFunc={sendData} />
        </Modal>
      )}
    </header>
  );
}
