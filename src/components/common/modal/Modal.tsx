import ReactDOM  from "react-dom";
import "./modal.css";
import close from "../../../../public/image/х.png";

type TModal = {
  toggle: ()=> void,
  children?: React.ReactNode,
  name: {title: string, id:string },
}

export default function Modal({toggle, children, name}: TModal) {
  const {title, id } = name;
  function closeModal() {
    toggle();
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-head">
          {id? <h4>{title} c id: {id}</h4>: <h4>{title}</h4>}
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

