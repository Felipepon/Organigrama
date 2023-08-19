import "./Colaborador.css"

const Colaborador = (props) =>{
    const { nombre, Puesto, Foto,equipo } = props.datos
    const{colorPrimario}=props

    return<div className="colaborador" >
        <div className="Encabezado"style={{backgroundColor:colorPrimario}} >
            <img src={Foto} alt={nombre} ></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{Puesto}</h5>
        </div>

    </div>
}

export default Colaborador

