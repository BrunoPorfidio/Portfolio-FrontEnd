export class Educacion {
    idEducacion: Number;
    
    institucion: String;
   
    titulo: String;
    
    inicio: Number;
    
    fin: Number;

    constructor(idEducacion: Number, institucion: String,titulo: String,inicio: Number,fin: Number){
        this.idEducacion = idEducacion;
        this.institucion = institucion;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;

    }

}