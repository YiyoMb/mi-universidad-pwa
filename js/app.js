document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');

    fetch('data/materias.json')
        .then(response => response.json())
        .then(materias => {
            contenido.innerHTML = '<h2>Materias Inscritas</h2>';
            const ul = document.createElement('ul');
            materias.forEach(materia => {
                const li = document.createElement('li');
                li.textContent = `${materia.nombre} - Profesor: ${materia.profesor}`;
                ul.appendChild(li);
            });
            contenido.appendChild(ul);
        })
        .catch(err => {
            contenido.innerHTML = '<p>No se pudo cargar la información.</p>';
            console.error(err);
        });
});



// ¿Qué elementos del App Shell se mantienen siempre?:
// - Header: "Mi Universidad"
// - Menú lateral: Inicio, Materias, Horarios, Perfil
// - Footer: "Universidad XYZ – 2025"

// ¿Qué elementos del App Shell cambian dinámicamente?:
// - Contenedor <main> que muestra lista de materias desde JSON
