import "./header.css";
import Button from "../../common/Button/Button";
import { useState } from "react";
import Modal from "../../common/modal/Modal";
import GetFormModal from "../../common/FormModal";

export default function Header() {
  const [statusModal, setStatusModal] = useState(false);

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = document.forms.namedItem("formM") as HTMLFormElement;
    const form1 = new FormData(form);
    console.log(form1);
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = form.description.value;
    const date = form.date.value;
    const time = form.time.value;
    const photo = form.photo.value;
    console.log(title, description, date, time, photo);
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
