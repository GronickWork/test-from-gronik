import './Button.css';

type TButton = {
  name?: string,
  url?: string,
  typeB?: string,

  onClick?: (e?: React.MouseEvent<HTMLButtonElement>)=> void
}
export default function Button({name, url, typeB,  onClick}: TButton) {
  return (
    <>
      {url
        ? <button className="button button-image" data-type={typeB} onClick={onClick}><img src={url} alt={name}/></button> 
        : <button className="button button-text" data-type={typeB} onClick={onClick}>{name}</button>
      }
    </>
    
  )
}

