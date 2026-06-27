<?php

require_once("../Conect.php");

$Datos = json_decode(
    file_get_contents("php://input"),
    true
);

$id = intval($Datos["IdBoleta"]);

$stmt = $conexion->prepare("DELETE FROM Boletas WHERE IdBoleta = ?");

$stmt->bind_param("i", $id);

if($stmt->execute()){

    echo "Boleta eliminada correctamente";
}
else{
    echo "Error al eliminar";
}
?>