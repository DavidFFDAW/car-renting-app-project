class Car{
    constructor(registration,brand,model,color,garage){
        this.registration = registration;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.id_garage = garage;
    }

    isEmpty = (field) => field === '';

    set registration(value){
        if(!REGEXP.CAR_REGISTRATION.test(value)){
            throw new Error('La matricula introducida no es una matricula valida');
        }
        if(this.isEmpty(value)){
            throw new Error('Se ha dejado el campo (matricula) vacio');
        }
        this._registration = value;
    }
    get registration(){
        return this._registration;
    }

    set brand(value){
        if(this.isEmpty(value)){
            throw new Error('Se ha dejado el campo (marca) vacio');
        }
        this._brand = value;
    }
    get brand(){
        return this._brand;
    }

    set model(value){
        if(this.isEmpty(value)){
            throw new Error('Se ha dejado el campo (modelo) vacio');
        }
        this._model = value;
    }
    get model(){
        return this._model;
    }

    set color(value){
        if(this.isEmpty(value)){
            throw new Error('Se ha dejado el campo (color) vacio');
        }
        this._color = value;
    }
    get color(){
        return this._color;
    }
}