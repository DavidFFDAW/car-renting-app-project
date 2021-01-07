class CarsLocalService{
    constructor(){
        this.cars = [];
    }

    addCar = newCar => this.cars = [...this.cars,newCar];
    updateCar = ({registration,brand,model,color}) => {
        const carToBeUpdated = this.findCarByRegistration(registration);
        console.log('car-update: ',carToBeUpdated);
        carToBeUpdated.brand = brand;
        carToBeUpdated.model = model;
        carToBeUpdated.color = color;
    }
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

    updateCurrentCar = car => {
        if(!this.alreadyExistCarByRegistration(car.registration)){
            throw new Error('No existe el coche que se pretende modificar');
        }
        this.updateCar(car);
    }
}