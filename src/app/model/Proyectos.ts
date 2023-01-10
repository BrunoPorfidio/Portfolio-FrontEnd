export class Proyectos{
    idProyectos: Number;

    tituloProyecto: String;

    descripcionProyecto: String;

    fotoProyecto: String;

    urlProyecto: String;

    constructor(idProyectos:Number, tituloProyecto:String, descripcionProyecto:String, fotoProyecto:String, urlProyecto:String){
        this.idProyectos = idProyectos;
        this.tituloProyecto = tituloProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.fotoProyecto = fotoProyecto;
        this.urlProyecto = urlProyecto;
    }


}