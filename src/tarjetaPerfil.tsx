interface TarjetaPerfilProps {
    nombre: string;
    carrera: string;
    semestre: number;
}


export function TarjetaPerfil({ nombre, carrera, semestre }: TarjetaPerfilProps) {
    const iniciales = nombre.split(" ").slice(0, 2).map((n) => n[0]).join("");

    return (
        <article className="tarjeta">
            <div className="tarjeta-avatar">{iniciales}</div>
            <h2 className="tarjeta-nombre">{nombre}</h2>
            <p className="tarjeta-carrera">{carrera}</p>
            <p className="tarjeta-semestre">{semestre} Semestre</p>
        </article>
    )

}