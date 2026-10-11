const formulario = document.querySelector("#formulario-pedido");
const boton = document.querySelector("#preparar-pedido");
const numeroWhatsApp = "";

boton.addEvenListener("click", function () {
  if (!formulario.reportValidity()) {
    return;
  }

  const pieza = document.querySelector("#pieza").value.trim();
  const colores = document.querySelector("#colores").value.trim() || "Sin preferencia";
  const largo = document.querySelector("#largo").value.trim() || "No indicado";
  const ancho = document.querySelector("#ancho").value.trim() || "No indicado";
  const alto = document.querySelector("#alto").value.trim() || "No indicado";
  const unidad = document.querySelector("#unidad").value;
  const cantidad = document.querySelector("#cantidad").value;
  const detalles = document.querySelector("#detalles").value.trim() || "Sin detalles adicionales";

  const mensaje = 'Hola quiero consultar por un pedido personalizado:

  Producto: ${pieza}
  Colores solicitados: ${colores}
  Medidas: ${largo} x ${ancho} ${unidad}
  Cantidad: ${cantidad}
  Detalles: ${detalles}';

  if (numeroWhatsApp === "") {
    alert("El pedido esta preparado. Mas adelante configuremos el numero de WhatsApp.");
     return;
  }

  const enlace = `https://wa.me/${numeroWhatsApp}?
  text=${encodeURIComponet(mensaje)}';
  window.open(enlace, "_blank", "noopener");
  });
  
  
                      
