import Menu from "@/app/menu/page";
import "./meusPlanos.css"
export default function meusPlanos(){
    return(
        <>
            <div>
                <Menu></Menu>
            </div>
            <div className="Planos">
                <h1>Meus Planos</h1>
                <p className="info">Eu planejo estudar o quanto conseguir para trabalhar com a programação, algo que gosto desde criança. Esse ano é meu último ano na escola, e pretendo aproveitar o tempo com meus amigos.</p>
            </div>
        </>
       
    )
}