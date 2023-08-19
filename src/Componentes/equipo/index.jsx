import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores } = props

    const obj = {
        backgroundColor: colorSecundario
    }

    const primario = {
        borderColor: colorPrimario
    }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj} >
                <h3 style={primario} >{titulo}</h3>
                <div className="Colaboradores">

                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        />)
                    }

                </div>
            </section>
        }
    </>
}
export default Equipo