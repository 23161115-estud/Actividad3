const TOAST_ICONOS = {
    exito: '✓',
    error: '✕',
    advertencia: '!',
    info: 'i'
};

function obtenerContenedorToast() {
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        contenedor.className = 'toast-container';
        document.body.appendChild(contenedor);
    }
    return contenedor;
}

function mostrarToast(opciones) {
    const {
        mensaje,
        titulo = '',
        tipo = 'info',
        duracion = 4000
    } = opciones || {};

    if (!mensaje) {
        console.warn('mostrarToast(): se requiere la propiedad "mensaje".');
        return null;
    }

    const contenedor = obtenerContenedorToast();

    const toast = document.createElement('div');
    toast.className = `toast toast--${tipo}`;
    toast.setAttribute('role', 'alert');

    const icono = document.createElement('div');
    icono.className = 'toast__icono';
    icono.textContent = TOAST_ICONOS[tipo] || TOAST_ICONOS.info;

    const contenido = document.createElement('div');
    contenido.className = 'toast__contenido';

    if (titulo) {
        const elTitulo = document.createElement('p');
        elTitulo.className = 'toast__titulo';
        elTitulo.textContent = titulo;
        contenido.appendChild(elTitulo);
    }

    const elMensaje = document.createElement('p');
    elMensaje.className = 'toast__mensaje';
    elMensaje.textContent = mensaje;
    contenido.appendChild(elMensaje);

    const btnCerrar = document.createElement('button');
    btnCerrar.className = 'toast__cerrar';
    btnCerrar.setAttribute('aria-label', 'Cerrar notificación');
    btnCerrar.textContent = '×';
    btnCerrar.addEventListener('click', () => cerrarToast(toast));

    const barraProgreso = document.createElement('div');
    barraProgreso.className = 'toast__progreso';
    if (duracion > 0) {
        barraProgreso.style.animationDuration = `${duracion}ms`;
    }

    toast.appendChild(icono);
    toast.appendChild(contenido);
    toast.appendChild(btnCerrar);
    if (duracion > 0) {
        toast.appendChild(barraProgreso);
    }

    contenedor.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('toast--visible'));

    if (duracion > 0) {
        setTimeout(() => cerrarToast(toast), duracion);
    }

    return toast;
}

function cerrarToast(toast) {
    if (!toast || !toast.parentElement) return;
    toast.classList.remove('toast--visible');
    toast.classList.add('toast--saliendo');
    setTimeout(() => toast.remove(), 300);
}
