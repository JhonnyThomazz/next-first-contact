import Menu from "../menu/page";
import "./sobre.css"
export default function Sobre(){
    return(
        <>
            <div>
                <Menu></Menu>
            </div>
            <div className="about">
             <h1>Sobre</h1>
             <p className="loremlol">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, ipsam nobis praesentium, vel numquam cumque pariatur sequi ut, quos molestiae minima.</p>
            </div>
        </>
       
    )
}