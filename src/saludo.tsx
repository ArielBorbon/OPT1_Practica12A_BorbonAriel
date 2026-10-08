interface saludoProps {
  nombre: string;
}

export const Saludo = ({ nombre }: saludoProps) => {
  return (
    <header className="saludo">
      <h1>Hola {nombre}</h1>
      <p>Bienvenido a mi primera app con react</p>
    </header>
  );
};