class CarsView extends View{
    constructor(){
        super();
        this.$tableBody = document.getElementById('car-table-tbody');
        this.$inptRegistration = document.getElementById('inpt-car-registration');
        this.$inptBrand = document.getElementById('inpt-car-brand');
        this.$inptModel = document.getElementById('inpt-car-model');
        this.$inptColor = document.getElementById('inpt-car-color');
        this.$inptGarage= document.getElementById('inpt-car-garage');
        this.$btnAddCar = document.getElementById('btn-car-add');
        this.$btnUpdateCar = document.getElementById('btn-car-update');
    }

    drawTable = (array, handler) => {
        for(const element of array){
            const row = document.createElement('tr');
            row.innerHTML = '<td>'+element.registration+'</td><td>'+element.brand+'</td>'+
            '<td>'+element.model+'</td><td>'+element.color+'</td>';
            const newTd = document.createElement('td');
            const button = document.createElement('button');
            button.classList.add('btn-delete');
            button.innerText = ' X ';
            button.addEventListener('click',ev => {
                const regs = ev.target.parentElement.parentElement.children[0].innerText;
                console.log(regs);
                handler(regs);
            });
            newTd.appendChild(button);
            row.appendChild(newTd);
            this.$tableBody.appendChild(row);
        }
    }

    bindPageLoad(handler){
        window.addEventListener('load',ev => {
            handler();
        });
    }

    bindAddButton(handler){
        this.$btnAddCar.addEventListener('click',ev => {
            // ev.preventDefault();
            const fields = {
                registration: this.$inptRegistration.value,
                brand: this.$inptBrand.value,
                model: this.$inptModel.value,
                color: this.$inptColor.value,
                garage: this.$inptGarage.value,
            }
            handler(fields);
        });
    }
    bindUpdateCar(handler){
        this.$btnUpdateCar.addEventListener('click',ev => {
            const editFields = {
                registration: this.$inptRegistration.value,
                brand: this.$inptBrand.value,
                model: this.$inptModel.value,
                color: this.$inptColor.value,
            };
            handler(editFields);
        });
    }
}