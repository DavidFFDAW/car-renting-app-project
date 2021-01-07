<?php
include_once 'config.php';
class DBConnection{
    private $conn;

    public function __construct(){
        $this->conn = new mysqli(DB_HOST.":".DB_PORT, DB_USER, DB_PASSWD, DB_DATABASE);
    }

    public function executeQuery($query){
        return $this->conn->query($query);
    }
}