export default class Cl_cliente{
    constructor(nombre,tipoServicio,edad,sexo){
        this.nombre = nombre;
        this.tipoServicio = tipoServicio;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set tipoServicio(tipoServicio){
        this._tipoServicio= tipoServicio;
    }
    get tipoServicio(){
        return this._tipoServicio;
    }
    set edad(edad){
        this._edad= +edad;
    }
    get edad(){
        return this._edad;
    }
    set sexo(sexo){
        this._sexo= sexo;
    }
    get sexo(){
        return this._sexo;
    }
}