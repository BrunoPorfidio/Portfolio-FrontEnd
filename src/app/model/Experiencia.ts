export class Experiencia{
    idExperiencia?: number;

    nombreEmpresa: String;

    puesto: String;

    descripcion: String;

    inicio: Number;

    fin: Number;

    constructor(

        nombreEmpresa: String,
    
        puesto: String,
    
        descripcion: String,
    
        inicio: Number,
    
        fin: Number
     
    ){
    
    this.nombreEmpresa = nombreEmpresa,

    this.puesto = puesto,

    this.descripcion = descripcion,

    this.inicio = inicio,

    this.fin = fin
    }
}