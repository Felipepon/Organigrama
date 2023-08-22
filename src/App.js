import { useState } from "react";
import { v4 as uuid} from "uuid";
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
  const [colaboradores, ActualizarColaboradores] =useState([{
    id: uuid(),
    Equipo: "Front End",
    Foto: "https://github.com/Felipepon.png",
    nombre: "Andres Uribe",
    Puesto: "Developer",
    fav: true
  },
  {
    id: uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/cflarios.png",
    nombre: "Cristian Larios",
    Puesto: "Desarrolladora de software y Devops",
    fav: true
  },
  {
    id: uuid(),
    Equipo: "UX y Diseño",
    Foto: "https://github.com/JozephDOM.png",
    nombre: "Juan Jose",
    Puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/JuviDev.png",
    nombre: "Julian Vivas",
    Puesto: "Head de urkdash e Instructor",
    fav: false
  },
  {
    id: uuid(),
    Equipo: "Innovación y Gestión",
    Foto: "https://github.com/perez2404.png",
    nombre: "Juan Perez",
    Puesto: "Dev FullStack",
    fav: false
  }])

  const [opciones, actuzlizarEquipos] = useState ([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])

  const cambiarMostrar = () => {
    ActualizarEstado(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{

    //spread operator = es una copia de los valores actuales 
    ActualizarColaboradores([...colaboradores, colaborador])

  }

  const eliminarColaborador = (id) =>  {
    console.log(id)
      const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
      ActualizarColaboradores(nuevosColaboradores)
  }

  const actuzlizarColor = (color,id) =>{
    const colorActuzalizado = opciones.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo

    }) 

    actuzlizarEquipos(colorActuzalizado)

  }

  const crearEquipo = (nuevoEquipo) =>{
    actuzlizarEquipos([...opciones,{...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    const ActualizarLike = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador

    }) 
    ActualizarColaboradores(ActualizarLike)
  }
 

  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
      equipos={opciones.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
      opciones.map((equipo) => (
        <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.Equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador} 
        actuzlizarColor={actuzlizarColor}
        like={like}
        />
      ))}

      <Footer/>
          
    </div>
  );
}

export default App;
