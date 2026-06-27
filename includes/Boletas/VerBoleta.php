<?php

require_once("../Conect.php");

if(!isset($_GET["id"])){

    http_response_code(400);
    exit;

}

$id = intval($_GET["id"]);

$stmt = $conexion->prepare("SELECT * FROM Boletas WHERE IdBoleta = ?");

$stmt->bind_param("i", $id);
$stmt->execute();

$resultado = $stmt->get_result();
$boleta = $resultado->fetch_assoc();

header("Content-Type: application/json");
echo json_encode($boleta);
?>