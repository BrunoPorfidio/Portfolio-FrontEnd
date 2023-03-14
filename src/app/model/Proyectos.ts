export class Proyectos{
    idProyectos?: number;

    nombreProyecto: String;

    descripcion: String;

    fotoProyecto: String;

    urlProyecto: String;

    constructor(

    nombreProyecto: String,

    descripcion: String,

    fotoProyecto: String,

    urlProyecto: String

    ){
    
    this.nombreProyecto = nombreProyecto,

    this.descripcion = descripcion,

    this.fotoProyecto = fotoProyecto,

    this.urlProyecto = urlProyecto
    }
}