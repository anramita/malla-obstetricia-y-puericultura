const ramos = document.querySelectorAll('.ramo');
const estadoRamos = {};

// Al inicio, deshabilita todo, luego habilita los sin requisitos
function actualizarEstado() {
  ramos.forEach(ramo => {
    const nombre = ramo.dataset.nombre;
    const requisitos = ramo.dataset.requisitos.split(',').filter(Boolean);

    const habilitado = requisitos.every(r => estadoRamos[r]);
    if (estadoRamos[nombre]) {
      ramo.classList.remove('habilitado');
      ramo.classList.add('aprobado');
    } else if (habilitado || requisitos.length === 0) {
      ramo.classList.add('habilitado');
      ramo.classList.remove('aprobado');
    } else {
      ramo.classList.remove('habilitado');
    }
  });
}

ramos.forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('habilitado')) return;

    const nombre = ramo.dataset.nombre;
    estadoRamos[nombre] = true;
    actualizarEstado();
  });
});

actualizarEstado();
