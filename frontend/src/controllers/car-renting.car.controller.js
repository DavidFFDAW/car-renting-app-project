class CarsController{
    constructor(carView,carService) {
        this.view = carView;
        this.service = carService;
        this.http = HttpService.getInstance();

        this.view.bindPageLoad(this.handlerPageLoad);
        this.view.bindAddButton(this.handlerButtonAdd);
        this.view.bindUpdateCar(this.handlerUpdateCar);
    }
    drawTableWithDeleteButton = array => this.view.drawTable(array,this.handlerDeleteCar);

    reloadTableAndSelects = _ => {        
        this.view.clearCarsList();
        this.view.clearTable(this.view.$tableBody);
        this.view.addCarToCarSelection(this.service.cars);
        this.drawTableWithDeleteButton(this.service.cars);
    };


    handlerDeleteCar = registration => {
        const url = HttpService.carsURL + 'index.php?registration='+registration;
        const car = this.service.findCarByRegistration(registration);
        const carBeforeDeletion = {registration: car.registration, brand: car.brand, model: car.model, color: car.color };

        if(this.view.confirmAction()){
            this.service.removeFromArrayByRegistration(registration);
            this.reloadTableAndSelects();
            this.http.delete(url)
                .then(data => {
                    if(data.error){
                        this.view.showError(data.error);
                        this.service.addNewCar(carBeforeDeletion);
                        this.reloadTableAndSelects();
                    }
                })
                .catch(this.view.showError);
        }
    }

    handlerPageLoad = _ => {
        try{
            const getCarsStoredInDB = this.http.get(HttpService.carsURL);
            getCarsStoredInDB.then(data => {
                console.log('CochesDB:',data.cars);
                this.service.cars = data.cars;
                this.view.addCarToCarSelection(this.service.cars);
                console.log('LocalCars:',this.service.cars)
                this.drawTableWithDeleteButton(this.service.cars);
            }).catch(this.view.showError);
        } catch(error){
            this.view.showError(error);
        }
    }
    handlerButtonAdd = fields => {
        try{
            this.service.addNewCar(fields);
            this.reloadTableAndSelects();
            this.http.post(HttpService.carsURL,fields)
                .then(data => {
                    if(data.error){
                        this.view.showError(data.error);
                        this.service.removeFromArrayByRegistration(fields.registration);
                        this.reloadTableAndSelects();
                    }
                })
                .catch(this.view.showError);
        } catch(error){
            this.view.showError(error);
        }
    }

    handlerUpdateCar = fields => {
        try{
            const car = this.service.findCarByRegistration(fields.registration);
            const carBeforeUpdate = {registration: car.registration, brand: car.brand, model: car.model, color: car.color};
            
            this.service.updateCurrentCar(fields);
            this.reloadTableAndSelects();
            this.http.put(HttpService.carsURL,fields)
                .then(data => {
                    if(data.error){
                        this.view.showError(data.error);
                        this.service.updateCurrentCar(carBeforeUpdate);
                        this.reloadTableAndSelects();
                    }
                })
                .catch(this.view.showError);
        } catch(error){
            this.view.showError(error);
        }

    }
}