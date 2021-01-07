class ReservationView extends View{
    constructor(){
        super();
        this.$reservationTableBody = document.getElementById('reservation-table-tbody');
        this.$inptStartDate = document.getElementById('inpt-reserv-initdate');
        this.$inptEndDate = document.getElementById('inpt-reserv-enddate');
        this.$inptGasoline = document.getElementById('inpt-reserv-gasoline');
        this.$inptPrice = document.getElementById('inpt-reserv-price');
        this.$btnAddReservation = document.getElementById('btn-reserv-add');
    }
    //* METHODS OF THE VIEW
    printTable = array => {
        for(const element of array){
            const $row = document.createElement('tr');
            $row.innerHTML = '<td>'+element.id+'</td><td>'+element.nif+'</td><td>'+element.registration+'</td><td>'+element.initDate+'</td><td>'+element.endDate+'</td><td>'+element.gasoline+'</td><td>'+element.price+'</td>';
            this.$reservationTableBody.appendChild($row);
        }
    }


    //* BINDINGS ... 
    bindButtonAddNewReservation(handler){
        this.$btnAddReservation.addEventListener('click',ev => {
            // ev.preventDefault();
            const fields = {
                clientNif: this.$selectCustomers.value, // DNI
                carRegistration: this.$selectCars.value,         // MATRICULA
                startDate: this.$inptStartDate.value,
                endDate: this.$inptEndDate.value,
                gasoline: this.$inptGasoline.value,
                price: this.$inptPrice.value
            };
            handler(fields);
        });
    }
}