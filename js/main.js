// Main application code for the periodic table

document.addEventListener('DOMContentLoaded', () => {
    // Crear la tabla periódica
    createPeriodicTable();
    
    // Configurar el modal
    setupModal();
    
    // Asegurarse de que la tabla se ajuste correctamente
    window.addEventListener('resize', () => {
        adjustTableLayout();
    });
    
    // Ajustar el diseño inicial
    setTimeout(adjustTableLayout, 100);
});

// Función para ajustar el diseño de la tabla
function adjustTableLayout() {
    const table = document.getElementById('periodic-table');
    if (!table) return;
    
    // Asegurar que la tabla ocupe el ancho completo
    const container = document.querySelector('.container');
    if (container) {
        const containerWidth = container.offsetWidth;
        const cellSize = Math.min(70, Math.floor((containerWidth - 40) / 18));
        document.documentElement.style.setProperty('--cell-size', `${cellSize}px`);
    }
}

// Crear la tabla periódica
function createPeriodicTable() {
    const table = document.getElementById('periodic-table');
    if (!table) return;
    
    // Limpiar la tabla
    table.innerHTML = '';
    
    // Crear la cuadrícula principal (7 filas × 18 columnas)
    for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            cell.className = 'empty-cell';
            
            // Verificar si hay un elemento en esta posición
            const elementData = positions.find(pos => pos[0] === row && pos[1] === col);
            
            if (elementData) {
                const elementNumber = elementData[2];
                const element = elements.find(el => el.number === elementNumber);
                
                if (element) {
                    cell.className = `element ${element.category}`;
                    cell.setAttribute('data-atomic-number', element.number);
                    cell.innerHTML = `
                        <div class="number">${element.number}</div>
                        <div class="symbol">${element.symbol}</div>
                        <div class="name">${element.name}</div>
                        <button class="details-btn" data-atomic-number="${element.number}">+</button>
                    `;
                    
                    // Agregar evento de clic a la celda
                    cell.addEventListener('click', () => showElementDetails(element.number));
                }
            }
            
            // Posicionar la celda en la cuadrícula
            cell.style.gridRow = row;
            cell.style.gridColumn = col;
            
            table.appendChild(cell);
        }
    }
    
    // Agregar filas para lantánidos y actínidos
    createLanthanidesAndActinides();
    
    // Agregar eventos a los botones de detalles
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const atomicNumber = parseInt(btn.getAttribute('data-atomic-number'));
            showElementDetails(atomicNumber);
        });
    });
}

// Crear las filas de lantánidos y actínidos
function createLanthanidesAndActinides() {
    const table = document.getElementById('periodic-table');
    if (!table) return;
    
    // Crear contenedor de lantánidos
    const lanthanidesContainer = document.createElement('div');
    lanthanidesContainer.className = 'lanthanides-container';
    lanthanidesContainer.style.gridRow = '8';
    lanthanidesContainer.style.gridColumn = '3 / span 15';
    
    // Crear etiqueta de lantánidos
    const lanthanidesLabel = document.createElement('div');
    lanthanidesLabel.className = 'lanthanides-label';
    lanthanidesLabel.textContent = 'Lantánidos';
    lanthanidesLabel.style.gridRow = '8';
    lanthanidesLabel.style.gridColumn = '1 / 3';
    table.appendChild(lanthanidesLabel);
    
    // Agregar lantánidos al contenedor
    const lanthanides = elements
        .filter(el => el.category === 'lanthanide')
        .sort((a, b) => a.number - b.number);
    
    lanthanides.forEach((element, index) => {
        const cell = document.createElement('div');
        cell.className = `element ${element.category}`;
        cell.setAttribute('data-atomic-number', element.number);
        cell.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <button class="details-btn" data-atomic-number="${element.number}">+</button>
        `;
        cell.addEventListener('click', () => showElementDetails(element.number));
        lanthanidesContainer.appendChild(cell);
    });
    
    table.appendChild(lanthanidesContainer);
    
    // Crear contenedor de actínidos
    const actinidesContainer = document.createElement('div');
    actinidesContainer.className = 'actinides-container';
    actinidesContainer.style.gridRow = '9';
    actinidesContainer.style.gridColumn = '3 / span 15';
    
    // Crear etiqueta de actínidos
    const actinidesLabel = document.createElement('div');
    actinidesLabel.className = 'actinides-label';
    actinidesLabel.textContent = 'Actínidos';
    actinidesLabel.style.gridRow = '9';
    actinidesLabel.style.gridColumn = '1 / 3';
    table.appendChild(actinidesLabel);
    
    // Agregar actínidos al contenedor
    const actinides = elements
        .filter(el => el.category === 'actinide')
        .sort((a, b) => a.number - b.number);
    
    actinides.forEach((element, index) => {
        const cell = document.createElement('div');
        cell.className = `element ${element.category}`;
        cell.setAttribute('data-atomic-number', element.number);
        cell.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <button class="details-btn" data-atomic-number="${element.number}">+</button>
        `;
        cell.addEventListener('click', () => showElementDetails(element.number));
        actinidesContainer.appendChild(cell);
    });
    
    table.appendChild(actinidesContainer);
}
    
    // Add event listeners to all detail buttons
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const atomicNumber = parseInt(btn.getAttribute('data-atomic-number'));
            showElementDetails(atomicNumber);
        });
    });
}

// Show element details in modal
function showElementDetails(elementNumber) {
    const element = elements.find(el => el.number === elementNumber);
    if (!element) return;
    
    const modal = document.getElementById('elementModal');
    const detailsDiv = document.getElementById('elementDetails');
    
    // Set the element details
    detailsDiv.innerHTML = `
        <h2>
            <span class="symbol">${element.symbol}</span>
            <span>${element.name}</span>
        </h2>
        <div class="property"><strong>Número atómico:</strong> ${element.number}</div>
        <div class="property"><strong>Masa atómica:</strong> ${element.mass} u</div>
        <div class="property"><strong>Configuración electrónica:</strong> ${element.electron}</div>
        <div class="property"><strong>Electronegatividad:</strong> ${element.electronegativity}</div>
        <div class="property"><strong>Descubierto en:</strong> ${element.discovered}</div>
        <div class="property"><strong>Grupo:</strong> ${getGroupName(element.category)}</div>
    `;
    
    // Show the modal
    modal.style.display = 'flex';
    
    // Add animation class
    setTimeout(() => {
        document.querySelector('.modal-content').classList.add('show');
    }, 10);
}

// Configurar los eventos del modal
function setupModal() {
    const modal = document.getElementById('elementModal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (!modal || !closeBtn) return;
    
    // Cerrar el modal al hacer clic en la X
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar el modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Prevenir el cierre del modal al hacer clic dentro del contenido
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('elementModal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;
    
    // Quitar la clase de animación
    modalContent.classList.remove('show');
    
    // Ocultar el modal después de la animación
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

// Helper function to find element by symbol
function findElementBySymbol(symbol) {
    return elements.find(el => el.symbol === symbol);
}

// Helper function to find elements by category
function findElementsByCategory(category) {
    return elements.filter(el => el.category === category);
}
