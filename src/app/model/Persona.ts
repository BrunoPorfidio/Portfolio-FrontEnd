export class Persona{
    id: number;

    nombre: String;

    apellido: String;

    subTitulo: String;

    acercaMi: String;

    urlFoto: String;

    linkedinUrl: String;

    githubUrl: String;

    imgBanner: String;

    telefono: Number;

    email: String;

    ubicacion: String;

    constructor(
        id: number,

        nombre: String,

        apellido: String,

        subTitulo: String,

        acercaMi: String,

        urlFoto: String,

        linkedinUrl: String,

        githubUrl: String,

        imgBanner: String,

        telefono: Number,

        email: String,

        ubicacion: String

        ){
    this.id = id,

    this.nombre = nombre,
    
    this.apellido = apellido,

    this.subTitulo = subTitulo,

    this.acercaMi = acercaMi,

    this.urlFoto = urlFoto,

    this.linkedinUrl = linkedinUrl,

    this.githubUrl = githubUrl,

    this.imgBanner = imgBanner,

    this.telefono = telefono,

    this.email = email,

    this.ubicacion = ubicacion
    }
}