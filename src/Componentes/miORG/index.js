
import "./ORG.css"

const MiOrg = (props) => {
    
    return <section className="organigrama">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/Botão add-01 1.png" alt="add" onClick={props.cambiarMostrar} />

    </section>

}
export default MiOrg