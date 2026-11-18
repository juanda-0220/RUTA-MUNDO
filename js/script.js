// Filtro para buscar destinos por nombre y región
        const buscar = document.getElementById("buscar");
        const region = document.getElementById("region");
        const tarjetas = document.querySelectorAll(".destino");
        const sinResultados = document.getElementById("sinResultados");

        function filtrarDestinos() {
            let texto = buscar.value.toLowerCase();
            let seleccion = region.value;
            let visibles = 0;

            tarjetas.forEach(function(tarjeta) {
                let nombre = tarjeta.dataset.nombre.toLowerCase();
                let zona = tarjeta.dataset.region;

                if (nombre.includes(texto) && (seleccion === "todos" || zona === seleccion)) {
                    tarjeta.style.display = "block";
                    visibles++;
                } else {
                    tarjeta.style.display = "none";
                }
            });

            if (visibles === 0) {
                sinResultados.style.display = "block";
            } else {
                sinResultados.style.display = "none";
            }
        }

        buscar.addEventListener("input", filtrarDestinos);
        region.addEventListener("change", filtrarDestinos);

        // Cálculo de una reserva simulada
        const formReserva = document.getElementById("formReserva");
        const resultado = document.getElementById("resultado");

        formReserva.addEventListener("submit", function(evento) {
            evento.preventDefault();

            let nombre = document.getElementById("nombre").value;
            let destinoElegido = document.getElementById("destino").value;
            let precio = Number(document.getElementById("paquete").value);
            let personas = Number(document.getElementById("personas").value);
            let total = precio * personas;

            resultado.style.display = "block";
            resultado.innerHTML = "<strong>Reserva simulada correctamente.</strong><br>" +
                "Nombre: " + nombre + "<br>" +
                "Destino: " + destinoElegido + "<br>" +
                "Viajeros: " + personas + "<br>" +
                "Total estimado: $" + total.toLocaleString("es-CO") + " COP" +
                "<br><small>Este formulario es una demostración. No realiza pagos ni envía una reserva real.</small>";
        });
