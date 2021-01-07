class CarsLocalService{
    constructor(){
        this.cars = [];
    }

    addCar = newCar => this.cars = [...this.cars,newCar];
    findCarByRegistration = registration => this.cars.find(element => element.registration === registration);
    alreadyExistCarByRegistration = registration => this.cars.filter(element => element.registration === registration).length > 0;
    removeFromArrayByRegistration = registration => this.cars = this.cars.filter(element => element.registration !== registration);
    
    addNewCar = ({ registration, brand, model, color, garage }) => {
        if(this.alreadyExistCarByRegistration(registration)){
            throw new Error('Un vehiculo con esta matricula ya ha sido registrado');
        }
        const newCar = new Car(registration,brand,model,color,garage);
        this.addCar(newCar);
    }
}