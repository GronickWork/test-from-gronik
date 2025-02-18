export const formModal = (
<form className='form-modal' name='newS' onSubmit={sendData}>
    <label htmlFor="title">Название семинара</label>
    <input type="text" name="title"/> 
    <label htmlFor="description">Описание семинара</label>
    <textarea name="description"/>
    <label htmlFor="date">Дата семинара</label>
    <input type="date" name="date"/>
    <label htmlFor="time">Время семинара</label>
    <input type="time" name="time"/>
    <label htmlFor="photo">Фото семинара</label>
    <input type="text" name="photo" placeholder='путь к  картинке'/>
    <button>Добавить семинар</button>
  </form>
);
