document.addEventListener("DOMContentLoaded", CargarBoletas);
const BtnLimpiar = document.getElementById("BtnLimpiar");
BtnLimpiar.addEventListener("click", function () {
    document.getElementById('BuscarRut').value = '';
    document.getElementById('BuscarFecha').value = '';
    CargarBoletas();
});

async function CargarBoletas() {
    
    try {
        const Respuesta = await fetch("../includes/Boletas/CargarBoletas.php");
        const Boletas = await Respuesta.json();
        const TablaBoletas = document.getElementById("TablaBoletas");
        TablaBoletas.innerHTML = "";
        Boletas.forEach(boleta => {
            TablaBoletas.innerHTML += `
                <tr>
                    <td>${boleta.IdBoleta}</td>
                    <td>${boleta.Rut}</td>
                    <td>${boleta.NombreCliente}</td>
                    <td>${boleta.Ciudad}</td>
                    <td>${boleta.Fecha}</td>
                    <td>
                        <a class="BotonVer" href="VerBoleta.html?id=${boleta.IdBoleta}">Ver</a>
                        <a class="BotonEliminar" href="#" onclick="MostrarModal(${boleta.IdBoleta})"> Eliminar </a>
                    </td>
                </tr>
            `;
        });

    }
    catch (error) {
        console.error(error);
        alert("Error al cargar las boletas");
    }
}
