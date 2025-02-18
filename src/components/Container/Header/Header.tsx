import './header.css';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import Modal from '../../common/modal/Modal';


export default function Header() {
  const [statusModal, setStatusModal] = useState(false);
  const newSeminar = <form className='form-modal' name='newS' onSubmit={sendData}>
    <label htmlFor="title">Название семинара</label>
    <input type="text" name="title" required/> 
    <label htmlFor="description">Описание семинара</label>
    <textarea name="description"/>
    <label htmlFor="date">Дата семинара</label>
    <input type="date" name="date"/>
    <label htmlFor="time">Время семинара</label>
    <input type="time" name="time"/>
    <label htmlFor="photo">Фото семинара</label>
    <input type="text" name="photo" placeholder='путь к  картинке'/>
    <button>Добавить семинар</button>
  </form>;

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
      const form = document.forms.namedItem('newS') as HTMLFormElement;
      const form1 = new FormData(form);
      console.log(form1);
      const title = (form.elements.namedItem('title') as HTMLInputElement).value;
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
      <h3 className='header-h3'>Расписание семинаров</h3>
      <Button name="Добавить семинар" onClick={()=> setStatusModal(true)}/>
      {statusModal && <Modal toggle={handlerClose} name={{title: 'Добавить семинар', id: ''}} children={newSeminar}/>}
    </header>
  )
}

