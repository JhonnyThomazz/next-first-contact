import "./Homepage.css";
import Menu from "./menu/page";
export default function Home(){
  return(
    <>
      <div>
        <Menu></Menu>
      </div>
      <div className="cont">
        <h1>Bem vindo!</h1>
        <p></p>
      </div>
    </>
  )
}