export class Proyectos{
    idProyectos: number;

    nombreProyecto: String;

    descripcion: String;

    fotoProyecto: String;

    urlProyecto: String;

    constructor(
    idProyectos: number,

    nombreProyecto: String,

    descripcion: String,

    fotoProyecto: String,

    urlProyecto: String

    ){
    this.idProyectos = idProyectos,
    
    this.nombreProyecto = nombreProyecto,

    this.descripcion = descripcion,

    this.fotoProyecto = fotoProyecto,

    this.urlProyecto = urlProyecto
    }
}