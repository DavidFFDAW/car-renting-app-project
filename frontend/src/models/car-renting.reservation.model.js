class Reservation{
    constructor(id,client,car,initDate,endDate,gasoline,price){
        this.id = id;
        this.nif = client;        
        this.registration = car;        
        this.initDate = initDate;        
        this.endDate = endDate;        
        this.gasoline = gasoline;
        this.price = price;  
    }

    isEmpty = field => field === '';

    set id(value){
        this._id = value;
    }
    get id(){
        return this._id;
    }
    // client & car don't have validation cause they come from a select field
    set initDate(value){
        const valueDate = moment(value,'YYYY/MM/DD');
        const limitDate = moment('1/1/2000','YYYY/MM/DD');
        if(this.isEmpty(value)){
            throw new Error('La fecha no puede estar vacia');
        }
        if(valueDate < limitDate){
            throw new Error('La fecha inicial introducida es invalida o es anterior al 1/1/2000');            
        }
        this._initdate = value;
    }
    get initDate(){
        return this._initdate;
    }

    set endDate(value){
        const endDateValue = moment(value,'YYYY/MM/DD');
        const startDate = moment(this._initdate,'YYYY/MM/DD');
        if(this.isEmpty(value)){
            throw new Error('La fecha introducida esta vacia');
        }
        if(endDateValue < startDate){
            throw new Error('La fecha final es invalida o es inferior a la inicial')
        }
        this._endDate = value;
    }
    get endDate(){
        return this._endDate;
    }

    set gasoline(val){
        if(this.isEmpty(val)){
            throw new Error('Los litros de gasolina no pueden quedar vacios');
        }
        if(!REGEXP.IS_NUMBER.test(val)){
            throw new Error('Los litros de gasolina deben ser un número');
        }
        this._gasoline = val;
    }
    get gasoline(){
        return this._gasoline;
    }

    set price(val){
        if(this.isEmpty(val)){
            throw new Error('El precio no puede quedar vacio');
        }
        if(!REGEXP.IS_NUMBER.test(val)){
            throw new Error('El precio debe ser un número');
        }
        this._price = val;
    }
    get price(){
        return this._price;
    }
}