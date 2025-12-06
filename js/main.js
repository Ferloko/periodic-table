// Main application code for the periodic table

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
                    cell.setAttribute('data-symbol', element.symbol);
                    cell.innerHTML = `
                        <div class="number">${element.number}</div>
                        <div class="symbol">${element.symbol}</div>
                        <div class="name">${element.name}</div>
                        <button class="add-btn" data-symbol="${element.symbol}" title="Añadir a la mezcla">+</button>
                        <button class="details-btn" data-atomic-number="${element.number}" title="Ver detalles">i</button>
                    `;
                    
                    // Agregar evento de clic a la celda para mostrar detalles
                    cell.addEventListener('click', (e) => {
                        // Solo mostrar detalles si no se hizo clic en un botón
                        if (!e.target.matches('button')) {
                            showElementDetails(element.number);
                        }
                    });
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
    
    // Agregar eventos a los botones de añadir
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const symbol = btn.getAttribute('data-symbol');
            if (symbol) {
                addToFirstEmptySlot(symbol);
            }
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
        cell.setAttribute('data-symbol', element.symbol);
        cell.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <button class="add-btn" data-symbol="${element.symbol}" title="Añadir a la mezcla">+</button>
            <button class="details-btn" data-atomic-number="${element.number}" title="Ver detalles">i</button>
        `;
        
        // Add click handler for the cell
        cell.addEventListener('click', (e) => {
            if (!e.target.matches('button')) {
                showElementDetails(element.number);
            }
        });
        
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
        cell.setAttribute('data-symbol', element.symbol);
        cell.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <button class="add-btn" data-symbol="${element.symbol}" title="Añadir a la mezcla">+</button>
            <button class="details-btn" data-atomic-number="${element.number}" title="Ver detalles">i</button>
        `;
        
        // Add click handler for the cell
        cell.addEventListener('click', (e) => {
            if (!e.target.matches('button')) {
                showElementDetails(element.number);
            }
        });
        
        actinidesContainer.appendChild(cell);
    });
    
    table.appendChild(actinidesContainer);
}

// Show element details in modal
function showElementDetails(elementNumber) {
    const element = elements.find(el => el.number === elementNumber);
    if (!element) return;
    
    const modal = document.getElementById('elementModal');
    const detailsDiv = document.getElementById('elementDetails');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !detailsDiv || !modalContent) return;
    
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
    
    // Force reflow
    void modal.offsetWidth;
    
    // Add show class for animation
    modal.classList.add('show');
    modalContent.classList.add('show');
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
    if (!modal) return;
    
    // Quitar la clase 'show' para la animación
    modal.classList.remove('show');
    
    // Ocultar el modal después de la animación
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Asegurarse de que coincida con la duración de la transición CSS
}

// Helper function to find element by symbol
function findElementBySymbol(symbol) {
    return elements.find(el => el.symbol === symbol);
}

// Helper function to find elements by category
function findElementsByCategory(category) {
    return elements.filter(el => el.category === category);
}

// Función para cargar y mostrar los compuestos
function setupCompoundsMenu() {
    const compoundsBtn = document.getElementById('compoundsBtn');
    const compoundsMenu = document.getElementById('compoundsMenu');
    const compoundsList = document.getElementById('compoundsList');
    const compoundSearch = document.getElementById('compoundSearch');
    
    if (!compoundsBtn || !compoundsMenu || !compoundsList || !compoundSearch) {
        console.error('No se encontraron los elementos necesarios para el menú de compuestos');
        return;
    }
    
    // Función para cargar los compuestos
    function loadCompounds() {
        // Usar la promesa que ya está cargando los compuestos
        window.compoundsDataPromise
            .then(compoundsData => {
                if (!compoundsData || Object.keys(compoundsData).length === 0) {
                    throw new Error('No se encontraron compuestos');
                }
                displayCompounds(compoundsData);
            })
            .catch(error => {
                console.error('Error al cargar los compuestos:', error);
                compoundsList.innerHTML = `
                    <div class="error-message">
                        <p>No se pudieron cargar los compuestos.</p>
                        <p>${error.message}</p>
                        <button id="retryLoad">Reintentar</button>
                    </div>
                `;
                
                // Agregar manejador de eventos para el botón de reintentar
                const retryBtn = document.getElementById('retryLoad');
                if (retryBtn) {
                    retryBtn.addEventListener('click', () => {
                        window.location.reload();
                    });
                }
            });
    }
    
    // Función para mostrar los compuestos
    function displayCompounds(compounds, filter = '') {
        compoundsList.innerHTML = '';
        
        // Ordenar los compuestos por nombre
        const sortedCompounds = Object.entries(compounds).sort((a, b) => a[1].name.localeCompare(b[1].name));
        
        // Filtrar si hay un término de búsqueda
        const filteredCompounds = filter 
            ? sortedCompounds.filter(([_, compound]) => 
                compound.name.toLowerCase().includes(filter.toLowerCase()) || 
                compound.formula.toLowerCase().includes(filter.toLowerCase()))
            : sortedCompounds;
        
        if (filteredCompounds.length === 0) {
            compoundsList.innerHTML = '<div class="no-results">No se encontraron compuestos que coincidan con la búsqueda.</div>';
            return;
        }
        
        // Mostrar los compuestos
        filteredCompounds.forEach(([formula, compound]) => {
            const compoundElement = document.createElement('div');
            compoundElement.className = 'compound-item';
            compoundElement.innerHTML = `
                <div class="formula">${compound.formula}</div>
                <div class="name">${compound.name}</div>
                <div class="elements">Elementos: ${compound.elements.join(', ')}</div>
            `;
            
            // Añadir evento de clic para mostrar los elementos del compuesto
            compoundElement.addEventListener('click', () => {
                highlightCompoundElements(compound.elements);
                compoundsMenu.classList.remove('show');
                document.body.classList.remove('menu-open');
            });
            
            compoundsList.appendChild(compoundElement);
        });
    }
    
    // Función para resaltar los elementos de un compuesto
    function highlightCompoundElements(elements) {
        // Quitar resaltado previo
        document.querySelectorAll('.element').forEach(el => {
            el.style.boxShadow = 'none';
            el.style.transform = '';
        });
        
        // Resaltar los elementos del compuesto
        elements.forEach(symbol => {
            const element = document.querySelector(`.element[data-symbol="${symbol}"]`);
            if (element) {
                element.style.boxShadow = '0 0 10px 3px rgba(46, 204, 113, 0.7)';
                element.style.transform = 'scale(1.1)';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        
        // Quitar el resaltado después de 3 segundos
        setTimeout(() => {
            document.querySelectorAll('.element').forEach(el => {
                el.style.boxShadow = '';
                el.style.transform = '';
            });
        }, 3000);
    }
    
    // Evento para mostrar/ocultar el menú
    compoundsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpening = !compoundsMenu.classList.contains('show');
        
        if (isOpening) {
            // Mostrar un indicador de carga
            compoundsList.innerHTML = '<div class="loading">Cargando compuestos...</div>';
            compoundsMenu.classList.add('show');
            document.body.classList.add('menu-open');
            
            // Cargar los compuestos si no se han cargado
            if (!window.compoundsData) {
                loadCompounds();
            } else {
                // Si ya están cargados, mostrarlos
                displayCompounds(window.compoundsData);
            }
        } else {
            // Si se está cerrando, simplemente ocultar
            compoundsMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!compoundsMenu.contains(e.target) && e.target !== compoundsBtn) {
            compoundsMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Buscar compuestos al escribir en el campo de búsqueda
    compoundSearch.addEventListener('input', (e) => {
        if (window.compoundsData) {
            const searchTerm = e.target.value.trim();
            displayCompounds(window.compoundsData, searchTerm);
        }
    });
    
    // Cerrar el menú al presionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && compoundsMenu.classList.contains('show')) {
            compoundsMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });
}

// Función para resaltar elementos por categoría
function highlightElementsByCategory(category) {
    // Quitar resaltado previo
    document.querySelectorAll('.element').forEach(el => {
        el.style.boxShadow = 'none';
        el.style.transform = '';
        el.style.zIndex = '';
    });
    
    // Resaltar elementos de la categoría seleccionada
    const elementsToHighlight = document.querySelectorAll(`.element.${category}`);
    
    if (elementsToHighlight.length > 0) {
        elementsToHighlight.forEach((element, index) => {
            // Usar un pequeño retraso para crear un efecto de secuencia
            setTimeout(() => {
                element.style.boxShadow = '0 0 15px 5px rgba(46, 204, 113, 0.8)';
                element.style.transform = 'scale(1.15)';
                element.style.zIndex = '10';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, index * 50);
        });
        
        // Quitar el resaltado después de 3 segundos
        setTimeout(() => {
            elementsToHighlight.forEach(element => {
                element.style.boxShadow = '';
                element.style.transform = '';
                element.style.zIndex = '';
            });
        }, 3000);
    }
}

// Configurar eventos de la leyenda
function setupLegendInteractions() {
    const legendItems = document.querySelectorAll('.legend-item');
    
    legendItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            if (category) {
                highlightElementsByCategory(category);
            }
        });
    });
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    setupModal();
    setupElementMixer();
    setupCompoundsMenu();
    setupLegendInteractions();
    
    // Ajustar el diseño inicial y al redimensionar la ventana
    adjustTableLayout();
    window.addEventListener('resize', adjustTableLayout);
    
    // Mostrar información de depuración
    console.log('Aplicación de la tabla periódica inicializada correctamente');
    console.log(`Número de elementos cargados: ${elements.length}`);
    
    // Verificar si hay elementos en el mezclador
    const elementsToMix = JSON.parse(localStorage.getItem('elementsToMix') || '[]');
    console.log(`Elementos en el mezclador: ${elementsToMix.length}`);
});

// Add this to main.js
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    setupElementMixer();
});

// En main.js, reemplaza la función setupElementMixer completa con esto:

async function setupElementMixer() {
    const slots = document.querySelectorAll('.slot');
    const mixBtn = document.getElementById('mixElements');
    const mixResult = document.getElementById('mixResult');
    const compoundsList = document.getElementById('compoundsList');
    
    let selectedElements = [];
    let compounds = {};

    // Compuestos por defecto
    const defaultCompounds = {
        "H2O": {
            "name": "Agua",
            "formula": "H₂O",
            "description": "Compuesto esencial para la vida, formado por dos átomos de hidrógeno y uno de oxígeno.",
            "elements": ["H", "H", "O"]
        },
        "CO2": {
            "name": "Dióxido de Carbono",
            "formula": "CO₂",
            "description": "Gas incoloro presente en la atmósfera, esencial para la fotosíntesis.",
            "elements": ["C", "O", "O"]
        },
        "NaCl": {
            "name": "Cloruro de Sodio",
            "formula": "NaCl",
            "description": "Conocido como sal de mesa, compuesto por sodio y cloro.",
            "elements": ["Na", "Cl"]
        },
        "H2O2": {
            "name": "Peróxido de Hidrógeno",
            "formula": "H₂O₂",
            "description": "Conocido como agua oxigenada, usado como desinfectante.",
            "elements": ["H", "H", "O", "O"]
        },
        "CH4": {
            "name": "Metano",
            "formula": "CH₄",
            "description": "Gas incoloro e inodoro, principal componente del gas natural.",
            "elements": ["C", "H", "H", "H", "H"]
        }
    };

    try {
        // Try to load from file, but don't fail if it doesn't work
        try {
            const response = await fetch('mezclas.json');
            if (response.ok) {
                const data = await response.json();
                if (data && Object.keys(data).length > 0) {
                    compounds = data;
                    console.log('Compuestos cargados desde el archivo mezclas.json');
                } else {
                    throw new Error('El archivo está vacío');
                }
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        } catch (error) {
            console.warn('No se pudo cargar mezclas.json, usando compuestos por defecto');
            console.warn('Error detallado:', error.message);
            compounds = defaultCompounds;
        }

        if (Object.keys(compounds).length === 0) {
            throw new Error('No se pudieron cargar los compuestos');
        }

        // Configurar eventos de los elementos para hacer clic
        document.querySelectorAll('.element').forEach(element => {
            // Agregar botón de añadir
            const addBtn = document.createElement('button');
            addBtn.className = 'add-btn';
            addBtn.innerHTML = '+';  // O un ícono de tu preferencia
            addBtn.title = 'Añadir al mezclador';
            
            // Asegurarse de que el evento no se propague al elemento padre
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const symbol = element.getAttribute('data-symbol');
                if (symbol) {
                    addToFirstEmptySlot(symbol);
                }
            });
            
            element.appendChild(addBtn);
        });

        // Configurar eventos de los slots para limpiar al hacer clic
        slots.forEach(slot => {
            slot.addEventListener('click', () => clearSlot(slot));
        });

        // Configurar botón de mezclar
        if (mixBtn) {
            mixBtn.addEventListener('click', mixElements);
        }

        // Mostrar compuestos conocidos
        displayKnownCompounds();

    } catch (error) {
        console.error('Error en setupElementMixer:', error);
        if (mixResult) {
            mixResult.innerHTML = `
                <div class="error-message">
                    <p>Error: ${error.message}</p>
                    <p>Por favor, recarga la página o verifica la consola para más detalles.</p>
                </div>
            `;
        }
        return;
    }

    function addToFirstEmptySlot(symbol) {
        // Encontrar el primer slot vacío
        const emptySlot = Array.from(slots).find(slot => !slot.hasChildNodes() || !slot.firstElementChild);
        
        if (emptySlot) {
            // Si hay un slot vacío, añadir el elemento
            const element = document.createElement('div');
            element.className = 'element mini-element';
            element.textContent = symbol;
            element.setAttribute('data-symbol', symbol);
            
            // Limpiar el slot por si acaso tiene algo
            emptySlot.innerHTML = '';
            emptySlot.appendChild(element);
            emptySlot.classList.add('filled');
            updateSelectedElements();
            
            // Mostrar mensaje de retroalimentación
            const elementName = elements.find(el => el.symbol === symbol)?.name || symbol;
            showMessage(`Añadido: ${elementName}`, 'success');
        } else {
            // Si no hay slots vacíos, mostrar mensaje
            showMessage('No hay espacios disponibles. Elimina un elemento primero.', 'warning');
        }
    }
    
    function addElementToSlot(slot, symbol) {
        const element = document.createElement('div');
        element.className = 'element mini-element';
        element.textContent = symbol;
        element.setAttribute('data-symbol', symbol);
        slot.innerHTML = '';  // Limpiar el slot primero
        slot.appendChild(element);
        slot.classList.add('filled');
        updateSelectedElements();
    }

    function clearSlot(slot) {
        if (slot.hasChildNodes()) {
            slot.innerHTML = '';
            slot.classList.remove('filled');
            updateSelectedElements();
        }
    }

    function updateSelectedElements() {
        selectedElements = Array.from(document.querySelectorAll('.slot.filled'))
            .map(slot => slot.firstElementChild.getAttribute('data-symbol'));
    }

    function mixElements() {
        if (selectedElements.length === 0) {
            showMessage('Por favor, selecciona al menos un elemento.', 'info');
            return;
        }

        const matchedCompound = findMatchingCompound(selectedElements);
        
        if (matchedCompound) {
            const compound = compounds[matchedCompound];
            showResult(`
                <div class="compound-result">
                    <h3>¡Compuesto Encontrado!</h3>
                    <div class="compound-formula">${compound.formula}</div>
                    <h4>${compound.name}</h4>
                    <p>${compound.description}</p>
                </div>
            `);
        } else {
            showResult(`
                <div class="no-compound">
                    <h3>No se encontró un compuesto conocido</h3>
                    <p>Has mezclado: ${selectedElements.join(' + ')}</p>
                    <p>¡Intenta con diferentes combinaciones!</p>
                </div>
            `, 'warning');
        }
    }

    function findMatchingCompound(elements) {
        return Object.keys(compounds).find(key => {
            const compoundElements = [...compounds[key].elements];
            const testElements = [...elements];
            
            if (compoundElements.length !== testElements.length) return false;
            
            compoundElements.sort();
            testElements.sort();
            
            return compoundElements.every((elem, i) => elem === testElements[i]);
        });
    }

    function displayKnownCompounds() {
        if (!compoundsList) return;
        
        compoundsList.innerHTML = Object.entries(compounds).map(([key, compound]) => `
            <div class="compound-card" data-compound="${key}">
                <h4>${compound.name}</h4>
                <div class="compound-formula">${compound.formula}</div>
                <p class="compound-desc">${compound.description}</p>
                <div class="compound-elements">
                    ${compound.elements.map(el => `<span class="element-badge">${el}</span>`).join(' + ')}
                </div>
            </div>
        `).join('');

        // Agregar eventos a las tarjetas de compuestos
        document.querySelectorAll('.compound-card').forEach(card => {
            card.addEventListener('click', () => {
                const compoundKey = card.getAttribute('data-compound');
                const compound = compounds[compoundKey];
                showResult(`
                    <div class="compound-result">
                        <h3>${compound.name}</h3>
                        <div class="compound-formula">${compound.formula}</div>
                        <p>${compound.description}</p>
                        <div class="compound-elements">
                            <p>Elementos: ${compound.elements.join(' + ')}</p>
                        </div>
                    </div>
                `);
            });
        });
    }

    function showResult(html, type = 'success') {
        if (mixResult) {
            mixResult.innerHTML = html;
            mixResult.className = `result-area ${type}`;
        }
    }

    function showMessage(message, type = 'info') {
        showResult(`<div class="message ${type}">${message}</div>`, type);
    }
    
    // Resto del código...
    // Add your remaining setupElementMixer code here
    
    function displayKnownCompounds() {
        // Implementation of displayKnownCompounds function
        if (compoundsList) {
            // Add your implementation here
        }
    }
}