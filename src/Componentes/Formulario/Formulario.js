import {useState} from "react"
import "./Formulario.css"
import Campo from "../Campo texto"
import ListaOpciones from "../lista_Opciones/opciones"
import Boton from "../botton"

const Formulario = (props) =>{
    const [nombre,actualizarNombre] =useState("")
    const [Puesto,actualizarPuesto] =useState("")
    const [Foto,actualizarFoto] =useState("")
    const [Equipo,actualizarEquipo]=useState("")

    const{registrarColaborador} = props

    const manejarEnvio = (evento) =>{
        evento.preventDefault()
        let datosEnviar ={
            nombre,
            Puesto,
            Foto,
            Equipo
    
        }
        registrarColaborador(datosEnviar)
    }

    

    return <section className="Formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre} 
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={Puesto}
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={Foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={Equipo} 
            actualizarValor={actualizarEquipo} 
            equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
export default Formulario