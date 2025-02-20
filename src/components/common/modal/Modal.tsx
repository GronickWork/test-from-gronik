import ReactDOM  from "react-dom";
import "./modal.css";
import close from "../../../../public/image/х.png";

type TModal = {
  toggle: ()=> void,
  children?: React.ReactNode,
  name: {header: string, id:string, title: string},
}

export default function Modal({toggle, children, name}: TModal) {
  const {header, id, title} = name;
  function closeModal() {
    toggle();
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-head" id={id}>
          {id? <h4>{header} семинар c заголовком: "{title}"?</h4>: <h4>{header}</h4>}
          <img src={close} alt="close" onClick={closeModal}/>
        </div>
        <div className="modal-content-body">
          {children}
        </div>
      </div>  
    </div>,
    document.body
  )
}

