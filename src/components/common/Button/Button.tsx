import './Button.css';

type TButton = {
  name: string,
  url?: string
}
export default function Button({name, url}: TButton) {
  return (
    <>
      {url
        ? <button className="button button-image"><img src={url} alt={name}/></button> 
        : <button className={`button button-text`}>{name}</button>
      }
    </>
    
  )
}

