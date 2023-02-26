export class Experiencia{
    idExperiencia: number;

    nombreEmpresa: String;

    puesto: String;

    descripcion: String;

    inicio: Number;

    fin: Number;

    constructor(
        idExperiencia: number,

        nombreEmpresa: String,
    
        puesto: String,
    
        descripcion: String,
    
        inicio: Number,
    
        fin: Number
     
    ){
    this.idExperiencia = idExperiencia,
    
    this.nombreEmpresa = nombreEmpresa,

    this.puesto = puesto,

    this.descripcion = descripcion,

    this.inicio = inicio,

    this.fin = fin
    }
}