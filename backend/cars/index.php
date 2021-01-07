<?php
include_once('../Queries.php');
include('../headers.php');
$queries = new Queries();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $cars = $queries->selectEveryCar();
    $carsArray = array();
    while ($row = $cars->fetch_array()) {
        $newCar = ['registration' => $row['matricula'], 'brand' => $row['marca'], 'model' => $row['modelo'], 'color' => $row['color']];
        array_push($carsArray, $newCar);
    }
    $finalArray['cars'] = $carsArray;
    echo json_encode($finalArray);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $dataReceived = file_get_contents('php://input');
    $parsedData = json_decode($dataReceived);
    /* $queries->addNewCar($parsedData->registration, $parsedData->brand, $parsedData->model, $parsedData->color, $parsedData->garage);
    if ($queries->selectCarByRegistration($parsedData->registration)->num_rows > 0) {
        $resp = 'success';
    } else {
        $resp = 'error';
    } */
    $resp = 'No se ha podido añadir este vehiculo a la base de datos';
    $response['error'] = $resp;
    echo json_encode($response);
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $registration = $_GET['registration'];
    //$queries->deleteCarByRegistration($registration);
    $response['error'] = "Este vehiculo con matricula $registration no ha sido borrado de la base de datos";
    echo json_encode($response);
}
