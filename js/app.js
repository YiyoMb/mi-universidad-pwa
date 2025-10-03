/* =========================
   App.js - Mi Universidad PWA
   ========================= */

/* -------------------------
   Datos de ejemplo (JSON local)
   ------------------------- */
const materias = [
    { id: 1, nombre: "Matemáticas I" },
    { id: 2, nombre: "Programación Web" },
    { id: 3, nombre: "Bases de Datos" },
    { id: 4, nombre: "Ingeniería de Software" },
];

/* -------------------------
   Función para renderizar contenido dinámico
   ------------------------- */
function renderizarMaterias() {
    const contenedor = document.getElementById("contenido");
    if (!contenedor) return;

    // Crear lista HTML
    let html = "<ul>";
    materias.forEach(materia => {
        html += `<li>${materia.nombre}</li>`;
    });
    html += "</ul>";

    contenedor.innerHTML = html;
}

/* -------------------------
   Registro del Service Worker
   ------------------------- */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(registro => {
                console.log("Service Worker registrado con éxito:", registro.scope);
            })
            .catch(error => {
                console.error("Error al registrar Service Worker:", error);
            });
    });
}

/* -------------------------
   Solicitar permiso de notificaciones
   ------------------------- */
function solicitarPermisoNotificaciones() {
    if (!("Notification" in window)) {
        console.log("Este navegador no soporta notificaciones");
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Permiso de notificaciones concedido");
        } else {
            console.log("Permiso de notificaciones denegado");
        }
    });
}

/* -------------------------
   Función para mostrar notificación de ejemplo
   ------------------------- */
function mostrarNotificacion(titulo, cuerpo) {
    if (Notification.permission === "granted") {
        new Notification(titulo, {
            body: cuerpo,
            icon: "icons/icon-192x192.png"
        });
    }
}

/* -------------------------
   Inicialización
   ------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    renderizarMaterias();
    solicitarPermisoNotificaciones();

    // Ejemplo: notificación al cargar la app
    mostrarNotificacion("Mi Universidad", "Bienvenido a la aplicación PWA");
});
