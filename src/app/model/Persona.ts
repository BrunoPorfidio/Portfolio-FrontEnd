export class Persona{
    idPersona: Number;

    nombre: String;

    apellido: String;

    correo: String;

    sobre_mi: String;

    urlFoto: String;

    linkedinUrl: String;

    githubUrl: String;

    imgBanner: String;

    constructor(idPersona: Number, nombre: String,apellido: String,correo: String, sobre_mi: String, urlFoto: String, 
        linkedinUrl: String,  githubUrl: String, imgBanner: String){
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.apellido =apellido;
        this.correo = correo;
        this.sobre_mi = sobre_mi;
        this.urlFoto = urlFoto;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.imgBanner = imgBanner;

    }


}