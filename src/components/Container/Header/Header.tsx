import './header.css';
import Button from '../../common/Button/Button';


export default function Header() {
  return (
    <header className="header">
      <h3 className='header-h3'>Расписание семинаров</h3>
      <Button name="Добавить семинар" />
    </header>
  )
}

