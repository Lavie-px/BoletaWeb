<?php

$Servidor = "";
$Usuario = "";
$Contrasena = "";
$BaseDatos = "";

$conexion = new mysqli($Servidor,$Usuario,$Contrasena,$BaseDatos);

if($conexion->connect_error){
    die("Error de conexión: " . $conexion->connect_error);
}

$conexion->set_charset("utf8");
?>