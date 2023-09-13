export class Educacion {
    idEducacion?: number; 
    
    institucion: String;
   
    titulo: String;
    
    inicio: Date;
    
    fin: Date;

    fotoEducacion: String;

    constructor(

        institucion: String,

        titulo: String,

        inicio: Date,

        fin: Date,

        fotoEducacion: String
    ){

        this.institucion = institucion,

        this.titulo = titulo,

        this.inicio = inicio,

        this.fin = fin

        this.fotoEducacion = fotoEducacion
    }

}