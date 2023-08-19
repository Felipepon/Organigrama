import { useState } from "react";
import "./App.css";
import Header from "./Componentes/header/header";
import Formulario from "./Componentes/Formulario/Formulario";
import MiOrg from "./Componentes/miORG";
import Equipo from "./Componentes/equipo";
import Footer from "./Componentes/footer";

function App() {
  //ternario --> condicion ? muestreme : no se muestra
  //otra forma --> condicion && muestreme

  const [mostrarFormulario, ActualizarEstado] = useState(false);
  const [colaboradores, ActualizarColaboradores] =useState([])

  const cambiarMostrar = () => {
    ActualizarEstado(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{

    //spread operator = es una copia de los valores actuales 
    ActualizarColaboradores([...colaboradores, colaborador])

  }

  //lista equipos
  const opciones = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
      equipos={opciones.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {opciones.map((equipo) => (
        <Equipo datos={equipo} key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.Equipo === equipo.titulo)} 
        />
      ))}

      <Footer/>
          
    </div>
  );
}

export default App;
