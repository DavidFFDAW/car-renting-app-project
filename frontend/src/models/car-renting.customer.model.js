class Customer{
    constructor(nif,name,address,telephone){
        this.nif = nif;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
    }

    isEmpty = field => field === '';


    set nif(value){
        if(!REGEXP.DNI.test(value)){
            throw new Error('El DNI introducido no es un DNI valido');
        }
        if(this.isEmpty(value)){
            throw new Error('El campo DNI no puede quedar vacío');
        }
        this._nif = value;
    }
    get nif(){
        return this._nif;
    }

    set name(value){
        if(!REGEXP.NAME.test(value)){
            throw new Error('El nombre no es válido');
        }
        if(this.isEmpty(value)){
            throw new Error('El campo Nombre no puede quedar vacio');
        }
        this._name = value;
    }
    get name(){
        return this._name;
    }

    set address(value){
        if(this.isEmpty(value)){
            throw new Error('La dirección no puede estar vacía');
        }
        this._address = value;
    }
    get address(){
        return this._address;
    }

    set telephone(value){
        if(!REGEXP.TELEPHONE.test(value)){
            throw new Error('Telefono no válido');
        }
        if(this.isEmpty(value)){
            throw new Error('El campo Telefono no puede quedar vacío');
        }
        this._telephone = value;
    }
    get telephone(){
        return this._telephone;
    }
}