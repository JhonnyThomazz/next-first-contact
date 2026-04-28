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
        <img className="imagem" src="https://www.pngplay.com/wp-content/uploads/10/Doom-Logo-Transparent-PNG.png  "/>
        <p>A little test page to talk about random stuff.</p>
      </div>
    </>
  )
}