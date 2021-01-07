<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
include_once('../Queries.php');
$queries = new Queries();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $customers = $queries->selectEveryCustomer();
    $customersArray = array();
    while ($row = $customers->fetch_array()) {
        $newCustomer = ['nif' => $row['nif'], 'name' => $row['nombre'], 'address' => $row['direccion'], 'telephone' => $row['telefono']];
        array_push($customersArray, $newCustomer);
    }
    $finalArray['customers'] = $customersArray;
    echo json_encode($finalArray);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $dataReceived = file_get_contents('php://input');
    $parsedData = json_decode($dataReceived);
    $queries->addNewCustomer($parsedData->nif, $parsedData->name, $parsedData->address, $parsedData->telephone);
    if ($queries->selectCustomerByNIF($parsedData->nif)->num_rows > 0){
        $response['response'] = 'success';
    } else {
        $response['error'] = 'No se ha añadido este cliente :(';
    }
    echo json_encode($response);
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $receiveCustomerDataToUpload = file_get_contents('php://input');
    $decodedCustomerData = json_decode($receiveCustomerDataToUpload);
    $queries->updateCustomerByNIF($decodedCustomerData->nif,$decodedCustomerData->name,$decodedCustomerData->address,$decodedCustomerData->telephone);
    if($queries->selectCustomerByNIF($decodedCustomerData->nif)->fetch_array()['nombre'] === $decodedCustomerData->name){
        $response['response'] = 'success';
    } else {
        $response['error'] = 'No se ha editado este cliente en la base de datos';
    }
    echo json_encode($response);
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $nif = $_GET['nif'];
    $queries->deleteCustomerByNIF($nif);
    if($queries->selectCustomerByNIF($nif)->num_rows > 0){
        $response['error'] = 'No se ha borrado de la base de datos';
    } else {
        $response['response'] = 'success';
    }
    echo json_encode($response);
}
