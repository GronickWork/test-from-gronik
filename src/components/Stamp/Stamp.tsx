import "./stamp.css";

type TStamp = {
  author: string;
  nameWork: string;
};
export default function Stamp({ author, nameWork }: TStamp) {
  return (
    <div className="stamp">
      <div className="stamp_circ">
        <div className="circ blink1"></div>
        <div className="circ blink2"></div>
        <div className="circ blink3"></div>
      </div>
      <div className="stamp_text">
        <p className="h6">author: {author}</p>
        <p className="h6">{nameWork}</p>
      </div>
    </div>
  );
}
