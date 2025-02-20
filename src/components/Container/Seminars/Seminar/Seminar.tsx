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
  photo: string,
  giveData?: (arg: {name: string, id: string, title: string})=>void
}

export default function Seminar(props: Tprops) {
  const {id, title, description, date, time, photo, giveData} = props;

    
  function handlerClickButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) {
    const target = e?.currentTarget;
    const modalName = target?.dataset.type === 'dlt'? 'Удалить': 'Изменить';
    if(target) {
      const seminarCard = target.closest('.seminar-card');
      const seminarTitle = seminarCard?.querySelector('.seminar-card-text h4')?.textContent;
      if(seminarCard) {
        giveData?.({name: modalName, id: seminarCard.id, title: seminarTitle!});
      }
    }

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
        <Button url={basket} typeB='dlt' onClick={handlerClickButton}/>
        <Button url={pencil} typeB='fix' onClick={handlerClickButton}/>
      </div>
    </div>
  )
}

