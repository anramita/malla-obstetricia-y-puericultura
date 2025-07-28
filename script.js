function verDetalle(ramo) {
  const detalles = {
    quimica: "Este ramo aborda la química general, inorgánica y orgánica.",
    biologia: "Incluye biología celular, fisiología y anatomía.",
  };

  const contenedor = document.getElementById("detalle");
  contenedor.innerHTML = `<h3>Detalle del ramo</h3><p>${detalles[ramo]}</p>`;
  contenedor.style.display = "block";
}
