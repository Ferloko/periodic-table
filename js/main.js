// Main application code for the periodic table

document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    setupModal();
});

// Create the periodic table
function createPeriodicTable() {
    const table = document.getElementById('periodic-table');
    
    // Clear the table
    table.innerHTML = '';
    
    // Create a 10x18 grid (10 rows, 18 columns)
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            cell.className = 'empty-cell';
            cell.style.gridRow = row;
            cell.style.gridColumn = col;
            
            // Check if there's an element at this position
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
                    
                    // Add click event to the cell
                    cell.addEventListener('click', () => showElementDetails(element.number));
                }
            }
            
            // Special handling for lanthanides and actinides
            if (row === 8) {
                if (col === 3) {
                    cell.className = 'lanthanides-label';
                    cell.textContent = 'Lantánidos';
                } else if (col > 3 && col < 18) {
                    const lanthanideIndex = col - 4;
                    const lanthanides = elements.filter(el => el.category === 'lanthanide').sort((a, b) => a.number - b.number);
                    
                    if (lanthanides[lanthanideIndex]) {
                        const element = lanthanides[lanthanideIndex];
                        cell.className = `element lanthanide ${element.category}`;
                        cell.setAttribute('data-atomic-number', element.number);
                        cell.innerHTML = `
                            <div class="number">${element.number}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                            <button class="details-btn" data-atomic-number="${element.number}">+</button>
                        `;
                        cell.addEventListener('click', () => showElementDetails(element.number));
                    }
                }
            } else if (row === 9) {
                if (col === 3) {
                    cell.className = 'actinides-label';
                    cell.textContent = 'Actínidos';
                } else if (col > 3 && col < 18) {
                    const actinideIndex = col - 4;
                    const actinides = elements.filter(el => el.category === 'actinide').sort((a, b) => a.number - b.number);
                    
                    if (actinides[actinideIndex]) {
                        const element = actinides[actinideIndex];
                        cell.className = `element actinide ${element.category}`;
                        cell.setAttribute('data-atomic-number', element.number);
                        cell.innerHTML = `
                            <div class="number">${element.number}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                            <button class="details-btn" data-atomic-number="${element.number}">+</button>
                        `;
                        cell.addEventListener('click', () => showElementDetails(element.number));
                    }
                }
            }
            
            table.appendChild(cell);
        }
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

// Setup modal event listeners
function setupModal() {
    const modal = document.getElementById('elementModal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('elementModal');
    const modalContent = document.querySelector('.modal-content');
    
    // Remove animation class
    modalContent.classList.remove('show');
    
    // Hide modal after animation
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
