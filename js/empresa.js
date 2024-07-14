export default class Cl_empresa {
    constructor() {
        this.contFemenina = 0;
        this.menorEdad = 999;
        this.acumEdad = 0;
        this.contCliente = 0;     
    }
procesarCliente(cliente){
    if(cliente.edad < this.menorEdad){
        this.menorEdad = cliente.edad;
        }     
    this.contCliente++;
    if(cliente.edad>=18 && cliente.sexo ==="F"){
        this.contFemenina++;
        }
    this.acumEdad += cliente.edad;
    
    }
devolverCoNtFemenino(){
    return this.contFemenina;
    }
devolverMenorEdad(){
    return this.menorEdad;
    }
devolverPromedioEdad(){
    return this.acumEdad/this.contCliente;
    }

}