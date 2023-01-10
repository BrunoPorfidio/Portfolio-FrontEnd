export class Experiencia{
    idExperiencia: Number;

    nombreEmpresa: String;

    puesto: String;

    descripcion: String;

    inicio: Number;

    fin: Number;

    constructor(idExperiencia:Number, nombreEmpresa:String, puesto:String, descripcion:String, inicio:Number, fin:Number){
        this.idExperiencia = idExperiencia;
        this.nombreEmpresa = nombreEmpresa;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;

    }

}