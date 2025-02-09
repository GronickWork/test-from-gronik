import './seminar.css';
import basket from '../../../../../public/image/delet.png';
import pencil from '../../../../../public/image/pencil.png';
import Button from '../../../common/Button/Button';
type Tprops = {
  id: number,
  title: string,
  description: string,
  date: string,
  time: string,
  photo: string
}

export default function Seminar(props: Tprops) {
  const {id, title, description, date, time, photo} = props;

  function deleteSeminar() {
  }
  function fixSeminar() {
    
  }
  return (
    <div className='seminar-card' id={id.toString()}>
      <div className='seminar-card-content'>
        <img src={photo} alt={title} />
        <div className="seminar-card-text">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{date} {time}</p>    
        </div>
      </div>
      
      <div className='seminar-card-button'>
        <Button url={basket} onClick={deleteSeminar}/>
        <Button url={pencil} onClick={fixSeminar}/>
      </div>
    </div>
  )
}

