<?php
include_once 'DBConnection.php';
class Queries
{
    private $connection;

    public function __construct()
    {
        $this->connection = new DBConnection();
    }

    public function selectEveryCustomer()
    {
        $statement = "SELECT * FROM customer;";
        return $this->connection->executeQuery($statement);
    }
    public function selectCustomerByNIF($nif)
    {
        $statement = "SELECT nombre FROM customer WHERE nif = '$nif';";
        return $this->connection->executeQuery($statement);
    }
    public function selectEveryCar()
    {
        $statement = "SELECT * FROM car;";
        return $this->connection->executeQuery($statement);
    }
    public function selectCarByRegistration($registration)
    {
        $statement = "SELECT matricula FROM car WHERE matricula = '$registration';";
        return $this->connection->executeQuery($statement);
    }
    public function addNewCustomer($nif, $name, $address, $telephone)
    {
        $statement = "INSERT INTO customer VALUES ('$nif','$name','$address','$telephone');";
        $this->connection->executeQuery($statement);
    }
    public function updateCustomerByNIF($nif, $name, $address, $telephone)
    {
        $statement = "UPDATE customer SET nombre = '$name', direccion = '$address', telefono = '$telephone' WHERE nif = '$nif';";
        $this->connection->executeQuery($statement);
    }
    public function addNewCar($registration, $brand, $model, $color, $id_garage)
    {
        $stm = "INSERT INTO car VALUES ('$registration','$brand','$model','$color',$id_garage);";
        $this->connection->executeQuery($stm);
    }
    public function deleteCarByRegistration($regs)
    {
        $stm = "DELETE from car WHERE matricula = '$regs';";
        $this->connection->executeQuery($stm);
    }
    public function deleteCustomerByNIF($nif)
    {
        $stm = "DELETE from customer WHERE nif = '$nif';";
        $this->connection->executeQuery($stm);
    }
}
