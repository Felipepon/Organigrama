import "./opciones.css"

const ListaOpciones = (props) =>{

   

    const manejaCambio = (evento) => {
        props.actualizarValor(evento.target.value)
    }

    return<div className="lista-opciones" >
        <label>Equipos</label>
        <select value={props.valor} onChange={manejaCambio} >
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
        </div>
    
}

export default ListaOpciones