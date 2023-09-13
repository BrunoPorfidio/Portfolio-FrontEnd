export class Skills{
    idSkill?: number;

    nombreSkill: String;
    
    fotoSkill: String;

    tipoSkill: String;

    constructor(

        nombreSkill: String,
        
        fotoSkill: String,

        tipoSkill: String

    ){
    
    this.nombreSkill = nombreSkill,

    this.fotoSkill = fotoSkill,
    
    this.tipoSkill = tipoSkill
    }
}