export class Educacion {
    idEducacion: number; 
    
    institucion: String;
   
    titulo: String;
    
    inicio: Number;
    
    fin: Number;

    fotoEducacion: String;

    constructor(
        idEducacion: number,

        institucion: String,

        titulo: String,

        inicio: Number,

        fin: Number,

        fotoEducacion: String
    ){
        this.idEducacion = idEducacion,

        this.institucion = institucion,

        this.titulo = titulo,

        this.inicio = inicio,

        this.fin = fin

        this.fotoEducacion = fotoEducacion
    }

}