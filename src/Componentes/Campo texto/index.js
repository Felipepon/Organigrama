
import "./Campo.css"

const Campo = (props) =>{


    const placeholderModificado= `${props.placeholder}...`

    const manejoCambio = (evento) =>{
        props.actualizarValor(evento.target.value)
    }

    return <div className="campo-texto" >
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejoCambio}
        />
    </div>
}

export default Campo
 