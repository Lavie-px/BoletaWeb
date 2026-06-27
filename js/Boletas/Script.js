function LimpiarFormulario() {
    document.querySelectorAll("form").forEach(form => form.reset());
    document.querySelectorAll("table tbody tr").forEach(tr => tr.remove());
    document.getElementById("Total").textContent = "0";
    CalcularSubtotal();
}

document.addEventListener("DOMContentLoaded", function () {

    const TotalSpan = document.getElementById("Total");
    const botonLimpiar = document.getElementById("LimpiarCampos");
    const botonNuevo = document.getElementById("NuevoElemento");
    const items = document.getElementById("items");

    function CalcularSubtotal() {
        let Total = 0;

        document.querySelectorAll("tr").forEach(tr => {
            const cantidad = tr.querySelector(".Cantidad");
            const valor = tr.querySelector(".Valor");

            if (cantidad && valor) {
                const Cantidad = parseInt(cantidad.value) || 0;
                const Valor = parseInt(valor.value) || 0;

                Total += Cantidad * Valor;
            }
        });

        TotalSpan.textContent = Total.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        });
    }

    // Delegación de eventos para manejar cambios en cualquier input de cantidad o valor
    //sin esto los nuevos inputs no podrian disparar el evento de calculo
    document.addEventListener("input", function (e) {
        if (
            e.target.classList.contains("Cantidad") ||
            e.target.classList.contains("Valor")
        ) {
            CalcularSubtotal();
        }
    });


    botonNuevo.addEventListener("click", AgregarFila);

    function AgregarFila() {

        const filanueva = document.createElement("tr");

        const tdCantidad = document.createElement("td");
        const tdDetalle = document.createElement("td");
        const tdValor = document.createElement("td");
        const tdEliminar = document.createElement("td");

        const inputCantidad = document.createElement("input");
        const inputDetalle = document.createElement("input");
        const inputValor = document.createElement("input");
        const eliminarBtn = document.createElement("button");

        inputCantidad.type = "number";
        inputCantidad.classList.add("InputTabla", "Cantidad");
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.name = "Cantidad[]";

        inputDetalle.type = "text";
        inputDetalle.classList.add("InputTabla", "Detalle");
        inputDetalle.name = "Detalle[]";

        inputValor.type = "number";
        inputValor.classList.add("InputTabla", "Valor");
        inputValor.min = 0;
        inputValor.value = 0;
        inputValor.name = "Valor[]";

        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add("Eliminar");

        eliminarBtn.addEventListener("click", () => {
            if (confirm("¿Deseas eliminar esta fila? Esta acción no se puede deshacer")) {
                filanueva.remove();
                CalcularSubtotal();
            }
        });

        tdCantidad.appendChild(inputCantidad);
        tdDetalle.appendChild(inputDetalle);
        tdValor.appendChild(inputValor);
        tdEliminar.appendChild(eliminarBtn);

        filanueva.appendChild(tdCantidad);
        filanueva.appendChild(tdDetalle);
        filanueva.appendChild(tdValor);
        filanueva.appendChild(tdEliminar);

        items.appendChild(filanueva);

        CalcularSubtotal();
    }

    botonLimpiar.addEventListener("click", function () {
        if (confirm("¿Deseas limpiar todos los campos? Esta acción no se puede deshacer")) {    
            LimpiarFormulario();
            CalcularSubtotal();
        }else{
            CalcularSubtotal(); 
        }
    });

    CalcularSubtotal();
});

const botonGuardar = document.getElementById("GenerarBoleta");

botonGuardar.addEventListener("click", GuardarBoleta);

async function GuardarBoleta(){
    const Rut = document.getElementById("Rut").value;
    const Nombre = document.getElementById("Client-Name").value;
    const Direccion = document.getElementById("Direcction").value;
    const Ciudad = document.querySelector(".City").value;
  
    let DetalleBoleta = "";

    document.querySelectorAll("#items tr").forEach(tr => {

        const Cantidad = tr.querySelector(".Cantidad");
        const Detalle = tr.querySelector(".Detalle");
        const Valor = tr.querySelector(".Valor");

        if(Rut.trim() === "" || Nombre.trim() === "" || Direccion.trim() === "" && Cantidad && Detalle && Valor && parseInt(Cantidad.value) > 0 && Detalle.value.trim() !== "" && parseInt(Valor.value) > 0){ 
            DetalleBoleta += `Cantidad: ${Cantidad.value} Producto: ${Detalle.value} | Valor: ${Valor.value}\n`;

        }else{
            alert("Debe ingresar al menos un producto válido.");
            return;
        }

    });

    const Total = document.getElementById("Total").textContent.replace(/[^\d]/g,"");

    const Datos = {
        Rut: Rut,
        Nombre: Nombre,
        Direccion: Direccion,
        Ciudad: Ciudad,
        Detalle: DetalleBoleta,
        Total: Total
    };

    try{

        const Respuesta = await fetch("../includes/Boletas/Guardar.php",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(Datos)
            }
        );

        const Resultado = await Respuesta.text();
        alert(Resultado);
        LimpiarFormulario();

    }
    catch(error){

        alert("Error al guardar la boleta");

        console.error(error);

    }

}