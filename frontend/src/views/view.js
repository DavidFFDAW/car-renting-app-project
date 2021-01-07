class View {
    // ↓ Properties that are common to all the views implemented in the application ↓
    constructor(){
        this.$selectCustomers = document.getElementById('sel-reserv-customers');
        this.$selectCars = document.getElementById('sel-reserv-cars');
    }
    // ↓ Methods that are common to all the views implemented in the application ↓

    clearCarsList = _ => this.$selectCars.innerHTML = '';
    clearCustomersList = _ => this.$selectCustomers.innerHTML = '';

    addCustomerToCustomerSelection = customersList => {
        for(const customer of customersList){
            const $option = document.createElement('option');
            $option.value = customer.nif;
            $option.innerText = customer.name;
            this.$selectCustomers.appendChild($option);
        }
    }
    addCarToCarSelection = carList => {
        for(const car of carList){
            const $option = document.createElement('option');
            $option.value = car.registration;
            $option.innerText = car.brand +' '+ car.model;
            this.$selectCars.appendChild($option);
        }
    }

    showError = message => alert(message);

    clearTable = table => table.innerHTML = '';

    confirmAction = _ => confirm('¿Esta seguro de que desea realizar esta accion?');
}