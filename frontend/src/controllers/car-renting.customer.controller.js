class CustomersController{
    constructor(view,service){
        this.customersView = view;
        this.customersService = service;
        this.http = HttpService.getInstance();

        this.customersView.bindLoadOfPage(this.handlerWindowLoad);
        this.customersView.bindCustomerAddButton(this.handlerAdditionOfNewClient);
        this.customersView.bindCustomerUpdateButton(this.handlerCustomerUpdate);
    }
    
    drawTableWithDeleteButton = array => this.customersView.drawContentOfTable(array,this.handlerDeleteCustomer);

    rewriteTablesAndSelect = _ => {        
        this.customersView.clearCustomersList();
        this.customersView.clearTable(this.customersView.$tableCustomersBody);
        this.customersView.addCustomerToCustomerSelection(this.customersService.customers);
        this.drawTableWithDeleteButton(this.customersService.customers);
    };

    
    handlerDeleteCustomer = nif => {
        try{
            const url = HttpService.customersURL + 'index.php?nif='+nif;
            const customer = this.customersService.findCustomerByNIF(nif);
            const customerBeforeDeletion = {nif: customer.nif, name: customer.name, address: customer.address, telephone: customer.telephone};
            
            if(this.customersView.confirmAction()){
                this.customersService.removeCustomerByNIF(nif);
                this.rewriteTablesAndSelect();
                this.http.delete(url)
                    .then(data => {
                        if(data.error){
                            this.customersView.showError(data.error);
                            this.customersService.addNewCustomer(customerBeforeDeletion);
                            this.rewriteTablesAndSelect();
                        }
                    })
                    .catch(this.customersView.showError);
            }
        } catch(error){
            this.customersView.showError(error);
        }
    };
    handlerWindowLoad = _ => {
        try{
            const getContentInDB = this.http.get(HttpService.customersURL);
            getContentInDB.then(data => {
                console.log('Customers-DB:',data);
                this.customersService.customers = data.customers;
                console.log('Local-Customers:',this.customersService.customers);
                this.customersView.addCustomerToCustomerSelection(this.customersService.customers);                
                this.drawTableWithDeleteButton(this.customersService.customers);
            });                                             // IT WORKS
        } catch(error){
            this.customersView.showError(error);
        }
    };
    handlerAdditionOfNewClient = (fieldsObject) => {
        try{
            this.customersService.addNewCustomer(fieldsObject);
            this.rewriteTablesAndSelect();
            this.http.post(HttpService.customersURL,fieldsObject)
                .then(data => {
                    console.log('%cResponseFromServer: '+data.response,'color: black; background-color: lightblue;');
                })
                .catch(this.customersView.showError);
        } catch(error){
            this.customersView.showError(error);
        }
    };
    handlerCustomerUpdate = (editFieldsObject) => {
        //* In this case the nif is never updated.
        const customerFound = this.customersService.findCustomerByNIF(editFieldsObject.nif);
        const customerBeforeUpdate = { nif: customerFound.nif, name: customerFound.name, address: customerFound.address, telephone: customerFound.telephone };
        try{
            this.customersService.editCurrentCustomer(editFieldsObject);
            this.rewriteTablesAndSelect();
            this.http.put(HttpService.customersURL,editFieldsObject)
                .then(data => {
                    if(data.error){
                        this.customersView.showError(data.error);
                        this.customersService.editCurrentCustomer(customerBeforeUpdate);
                        this.rewriteTablesAndSelect();
                    }
                })
                .catch(this.customersView.showError);
        } catch (error) {
            this.customersView.showError(error);
        }
    }

}