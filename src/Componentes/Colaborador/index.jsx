import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) =>{
    const { nombre, Puesto, Foto,equipo, id, fav} = props.datos
    const{colorPrimario, eliminarColaborador, like}=props

    return<div className="colaborador" >
        <AiFillCloseCircle onClick={()=>eliminarColaborador(id)} className="eliminar" />
        <div className="Encabezado"style={{backgroundColor:colorPrimario}} >
            <img src={Foto} alt={nombre} ></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{Puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> :  <AiOutlineHeart onClick={() => like(id)} />  }
            
           
        </div>

    </div>
}

export default Colaborador

