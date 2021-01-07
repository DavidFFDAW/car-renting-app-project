/* const views = { 
    customer: new CustomerView(),
    car: new CarView(),
    reservation: new ReservationView(),
} */
new CustomersController(new CustomersView(), new CustomersLocalService()); //* Customers App
new CarsController(new CarsView(), new CarsLocalService()); //* Cars App
new ReservationController(new ReservationView(), new ReservationLocalService()); //* Reservation App