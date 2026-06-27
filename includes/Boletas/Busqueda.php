<?php

require_once("../Conect.php");

$Datos = json_decode(file_get_contents("php://input"), true);

$Rut = trim($Datos["Rut"] ?? "");
$Fecha = trim($Datos["Fecha"] ?? "");

$sql = "SELECT IdBoleta, Rut, NombreCliente, Ciudad, Fecha FROM Boletas WHERE 1=1";

$params = [];
$types = "";

/* FILTRO RUT */
if($Rut !== ""){
    $sql .= " AND Rut LIKE ?";
    $params[] = "%$Rut%";
    $types .= "s";
}

/* FILTRO FECHA */
if($Fecha !== ""){
    $sql .= " AND Fecha = ?";
    $params[] = $Fecha;
    $types .= "s";
}

$stmt = $conexion->prepare($sql);

if(!empty($params)){
    $stmt->bind_param($types, ...$params);
}

$stmt->execute();

$result = $stmt->get_result();

$Boletas = [];

while($row = $result->fetch_assoc()){
    $Boletas[] = $row;
}

header("Content-Type: application/json");
echo json_encode($Boletas);