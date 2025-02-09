import {seminars as list} from '../../../../seminars.json';
import Seminar from './Seminar/Seminar';
import './seminars.css';
//import getSeminarsData from '../../utils/getSeminarsData'


export default function Seminars() {
  return (
  <div className="seminars">
    {list.map((item, index) => {return <Seminar key={index} {...item}/>})}
  </div>
  );
}
