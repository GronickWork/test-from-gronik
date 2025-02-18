import { useState } from 'react';
import {seminars as list} from '../../../../seminars.json';
import Seminar from './Seminar/Seminar';
import './seminars.css';
import Modal from '../../common/modal/Modal';
//import getSeminarsData from '../../utils/getSeminarsData'


export default function Seminars() {
  const [modalActive, setModalActive] = useState(false);
  const [headerModal, setHeaderModal] = useState({title: '', id: ''});
  function handlerOpen() {
    setModalActive(!modalActive);
  }
  function handlerName({name, id}:{name: string, id: string}) {
    setHeaderModal({title: name, id: id});
    setModalActive(true);
  }

  return (
  <div className="seminars">
    {list.map((item, index) => {return <Seminar key={index} giveName={handlerName} {...item}/>})}
    {modalActive && <Modal  toggle={handlerOpen} name={headerModal} children=<button>удалить</button>/>}
  </div>
  );
}
