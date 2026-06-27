<?php

    require_once("../Conect.php");

    $sql = "SELECT IdBoleta, Rut, NombreCliente, Ciudad, Fecha FROM Boletas ORDER BY IdBoleta DESC";

    $resultado = $conexion->query($sql);

    $Boletas = [];

    while($fila = $resultado->fetch_assoc()){
        $Boletas[] = $fila;
    }

    header("Content-Type: application/json");
    echo json_encode($Boletas);
?>