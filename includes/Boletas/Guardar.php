<?php

require_once("../Conect.php");

$Datos = json_decode(
    file_get_contents("php://input"),
    true
);

if(!$Datos){
    die("No se recibieron datos");
}

$Rut = $Datos["Rut"];
$Nombre = $Datos["Nombre"];
$Direccion = $Datos["Direccion"];
$Ciudad = $Datos["Ciudad"];
$Detalle = $Datos["Detalle"];
$Total = intval($Datos["Total"]);

if( empty($Rut) || empty($Nombre) || empty($Direccion) || empty($Detalle) ||$Total <= 0){
    http_response_code(400);
    echo "Datos inválidos";
    exit;
}

$stmt = $conexion->prepare("INSERT INTO Boletas(Rut,NombreCliente,Direccion,Ciudad,Detalle,Total) VALUES(?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssi",$Rut,$Nombre,$Direccion,$Ciudad,$Detalle,$Total);

if($stmt->execute()){
    echo "Boleta guardada correctamente";
}
else{
    echo "Error al guardar la boleta";
}

$stmt->close();
$conexion->close();