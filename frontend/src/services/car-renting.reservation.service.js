class ReservationLocalService{
    constructor(){
        this.reservations = [];
    }
    addReservation = newReservation => this.reservations = [...this.reservations,newReservation];
    
    addNewReservation = ({ clientNif, carRegistration, startDate, endDate, gasoline, price }) => {
        const newReservation = new Reservation(0,clientNif,carRegistration,startDate,endDate,gasoline,price);
        this.addReservation(newReservation);
    }
}