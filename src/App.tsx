import { Saludo } from "./saludo"; 
import { TarjetaPerfil} from "./tarjetaPerfil";

export default function App() { 
  return (
    <main className="Pagina">
      <Saludo nombre="Ariel Borbon" /> 
        <section className= "equipo">
          <TarjetaPerfil nombre="Ariels Borbon" carrera="Ingenieria en software" semestre={5} />
          <TarjetaPerfil nombre="Juanito Loco" carrera="Ingenieria en software" semestre={5} />
          <TarjetaPerfil nombre="Pedro Alcachofas" carrera="Ingenieria en software" semestre={5} />
        </section>
    </main>
  );
}
