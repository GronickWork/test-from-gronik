import './Button.css';

type TButton = {
  name?: string,
  url?: string,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>)=> void
}
export default function Button({name, url, onClick}: TButton) {
  return (
    <>
      {url
        ? <button className="button button-image" onClick={onClick}><img src={url} alt={name}/></button> 
        : <button className={`button button-text`} onClick={onClick}>{name}</button>
      }
    </>
    
  )
}

