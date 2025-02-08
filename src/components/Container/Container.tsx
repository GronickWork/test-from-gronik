import Seminars from "./Seminars/Seminars";
import "./container.css";
import Header from "./Header/Header";

export default function Container() {
  return (
  <main className="container">
    <Header/>
    <Seminars/>
  </main>
);
}
