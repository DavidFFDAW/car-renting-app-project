class ReservationController{
    constructor(view,service){
        this.reservationView = view;
        this.reservationService = service;

        this.reservationView.bindButtonAddNewReservation(this.handlerAdditionNewReservation);
    }
    handlerAdditionNewReservation = fields => {
        try{
            this.reservationService.addNewReservation(fields);
            this.reservationView.clearTable(this.reservationView.$reservationTableBody);
            this.reservationView.printTable(this.reservationService.reservations);
        } catch(error){
            this.reservationView.showError(error);
        }
    }
}