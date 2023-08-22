import "./equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actuzlizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.4) 
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj} >
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actuzlizarColor(evento.target.value, id)
                    }}
                
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="Colaboradores">

                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }

                </div>
            </section>
        }
    </>
}
export default Equipo