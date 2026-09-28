# Componente Toast

## Portada

**Componente Toast** es una librería visual reutilizable en JavaScript puro (sin frameworks) que muestra notificaciones flotantes ("toasts") en la esquina de la pantalla, sin interrumpir al usuario ni requerir que recargue la página.

**Problema que resuelve:** dar retroalimentación visual inmediata al usuario (éxito, error, advertencia o información) sin depender de un `alert()` bloqueante ni tener que escribir HTML y animaciones desde cero cada vez que se necesita avisar algo. Se llama con una sola función, `mostrarToast()`, y funciona en cualquier página con contenido distinto cada vez.


---

## Instalación

Agrega el CSS y el JS del componente en tu página:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

Con eso, la función `mostrarToast()` queda disponible globalmente en tu página.

---

## Uso

### Toast básico

```javascript
mostrarToast({ mensaje: "Guardado con éxito", tipo: "exito" });
```

### Toast con título

```javascript
mostrarToast({
  titulo: "Sin conexión",
  mensaje: "Revisa tu internet e intenta de nuevo.",
  tipo: "error"
});
```

### Controlar cuánto tiempo dura en pantalla

```javascript
mostrarToast({
  mensaje: "Esta notificación dura 8 segundos.",
  tipo: "info",
  duracion: 8000 // en milisegundos
});
```

### Toast que no se cierra solo (duracion: 0)

```javascript
mostrarToast({
  mensaje: "Debes cerrar esto manualmente.",
  tipo: "advertencia",
  duracion: 0
});
```

### Parámetros disponibles

| Parámetro  | Tipo   | Obligatorio | Descripción                                                        |
|------------|--------|:-----------:|----------------------------------------------------------------------|
| `mensaje`  | string | Sí          | Texto principal del toast.                                          |
| `titulo`   | string | No          | Texto en negrita arriba del mensaje.                                |
| `tipo`     | string | No          | `"exito"`, `"error"`, `"advertencia"` o `"info"` (por defecto).      |
| `duracion` | number | No          | Milisegundos antes de auto-cerrarse. `0` = no se cierra solo. Por defecto: `4000`. |

La reutilización viene de que `mostrarToast()` genera el HTML dinámicamente cada vez que se llama — puedes mostrar 1, 5 o 20 toasts distintos en la misma página, cada uno con su propio contenido, sin tocar el HTML.

---

## Estructura del repositorio

```
/componente-toast
├── README.md
├── index.html        → Página de demo con el componente en acción
├── css/
│   └── componente.css
├── js/
│   └── componente.js  → La librería del componente
└── img/
```

---

## Demo en vivo

Este proyecto tiene GitHub Pages activado. Pruébalo aquí:
https://23161115-estud.github.io/Actividad3/

---

## Capturas de pantalla

**Página de demo** — el componente instalado, listo para usarse:

![Página de demo](img/Captura%20de%20pantalla%20demo.png)

**Varios toasts apilados** — se pueden mostrar distintos tipos al mismo tiempo, cada uno con su color:

![Toasts apilados](img/Captura%20de%20pantalla%20toasts.png)

**Contenido personalizado** — el mismo componente, reutilizado con título, mensaje y tipo distintos:

![Toast personalizado](img/Captura%20de%20pantalla%20personalizado.png)

---

## Video demo

https://drive.google.com/file/d/1K3pe9rePsk-FdQV_OrlLOxSLxQoS7SYg/view?usp=sharing

---

## Autor

Ruiz Durán Emiliano
