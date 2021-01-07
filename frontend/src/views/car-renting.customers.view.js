class CustomersView extends View{
    constructor(){
        super();
        this.$tableCustomersBody = document.getElementById('customer-table-tbody');
        this.$inptCustomerDNI = document.getElementById('inpt-customer-dni');
        this.$inptCustomerName = document.getElementById('inpt-customer-name');
        this.$inptCustomerAddress = document.getElementById('inpt-customer-address');
        this.$inptCustomerTelephone = document.getElementById('inpt-customer-telephone');
        this.$btnCustomerAdd = document.getElementById('btn-customer-add');
        this.$btnCustomerUpdate = document.getElementById('btn-customer-update');
    }

    drawContentOfTable = (array,handler) => {
        if(array.length < 1){
            // when the array is not empty.
        }
        else{
            for(const element of array){
                const $row = document.createElement('tr');
                $row.innerHTML = '<td>'+element.nif+'</td><td>'+element.name+'</td><td>'+element.address+'</td><td>'+element.telephone+'</td>';
                const $newCell = document.createElement('td');
                const $button = document.createElement('button');
                $button.innerText = 'X';
                $button.classList.add('btn-delete');
                $button.addEventListener('click',ev => {
                    const nif = ev.target.parentElement.parentElement.children[0].innerText;
                    console.log(nif);
                    handler(nif);
                    }
                ); // execute the handler with the dni;
                $newCell.appendChild($button);
                $row.appendChild($newCell);
                this.$tableCustomersBody.appendChild($row);
            }
        }
    }

    bindLoadOfPage(handler){
        window.addEventListener('load',ev => {
            handler();
        });
    }
    bindCustomerAddButton(handler){
        this.$btnCustomerAdd.addEventListener('click',ev => {
            // ev.preventDefault();
            const fields = { nif: this.$inptCustomerDNI.value, name: this.$inptCustomerName.value,
                address: this.$inptCustomerAddress.value, telephone: this.$inptCustomerTelephone.value };
            handler(fields);
        });
    }
    bindCustomerUpdateButton(handler){
        this.$btnCustomerUpdate.addEventListener('click',ev => {
            const editFields = {
                nif: this.$inptCustomerDNI.value,
                name: this.$inptCustomerName.value,
                address: this.$inptCustomerAddress.value,
                telephone: this.$inptCustomerTelephone.value
            };
            handler(editFields);
        });
    }
}