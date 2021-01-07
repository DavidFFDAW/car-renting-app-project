class CustomersLocalService{
    constructor(){
        this.customers = [];
    }

    initializeCustomers = customersList => this.customers = customersList; // testing only
    addCustomer = newCustomer => this.customers = [...this.customers,newCustomer];

    findCustomerByNIF = nif => this.customers.find(element => element.nif === nif);

    editCustomer = ({ nif, name, address, telephone }) => {
        const customerToBeEdited = this.findCustomerByNIF(nif);
        console.log('service-customerEditable: ',customerToBeEdited);
        customerToBeEdited.name = name;
        customerToBeEdited.address = address;
        customerToBeEdited.telephone = telephone;
    };
    alreadyExistCustomerByNIF = nif => this.customers.filter(element => element.nif === nif).length > 0;
    removeCustomerByNIF = nif => this.customers = this.customers.filter(element => element.nif !== nif);

    editCurrentCustomer = ({ nif,name,address,telephone }) => {
        const customerToBeEdited = new Customer(nif,name,address,telephone);
        if (!this.alreadyExistCustomerByNIF(nif)){
            throw new Error('Este cliente no existe para ser modificado');
        }
        this.editCustomer(customerToBeEdited);
    };

    addNewCustomer = ({ nif, name, address, telephone }) => {
        if(this.alreadyExistCustomerByNIF(nif)){
            throw new Error('Ya existe un cliente con este DNI');
        }
        const newCustomer = new Customer(nif,name,address,telephone);
        this.addCustomer(newCustomer);
    };
}