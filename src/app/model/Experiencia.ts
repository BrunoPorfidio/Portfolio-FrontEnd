export class Experiencia{
    idExperiencia?: number;

    nombreEmpresa: String;

    puesto: String;

    inicio: Number;

    fin: Number;

    constructor(

        nombreEmpresa: String,
    
        puesto: String,
    
        inicio: Number,
    
        fin: Number
     
    ){
    
    this.nombreEmpresa = nombreEmpresa,

    this.puesto = puesto,

    this.inicio = inicio,

    this.fin = fin
    }
}