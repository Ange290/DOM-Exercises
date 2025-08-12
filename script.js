function attachBuyEvents() {
    let btn = document.querySelectorAll('button');
    let tbody = document.createElement('tbody');
    let table = document.querySelector('table');
    let thead= document.querySelector('thead');
 
    for (let button of btn) {
        button.addEventListener('click', function(event) {
            let row = document.createElement('tr');
            tbody.appendChild(row);
            
            let parent = event.target.parentElement;
            parent.classList.toggle('sale');
            
            if(parent.style.backgroundColor === '#ffddd2') {
                parent.style.backgroundColor = '#006d77';
            } else {
                parent.style.backgroundColor = '#ffddd2';
            }
            
         
            let product = parent.querySelector('h2').textContent;
            let quantity = parseInt(parent.querySelector('input.quantity').value);
            let price = parseInt(parent.querySelector('.price').textContent);
            let total = quantity * price;
            
            let id = document.createElement('td');
            id.textContent = tbody.children.length;
            
            let existingRow = null;
            for(let row of tbody.rows) {
                if (row?.cells[1]?.textContent === product) {
                    existingRow = row;
                    break;
                }
            }
            
            if(existingRow) {
                let existQuantity = existingRow.cells[2];
                let existTotal = existingRow.cells[4];
                
                let updateQuantity = parseInt(existQuantity.textContent) + quantity;
                let updateTotal = parseInt(existTotal.textContent) + total;
                
                existQuantity.textContent = updateQuantity;
                existTotal.textContent = updateTotal;
                tbody.removeChild(row);
            } else {
                let newRow = document.createElement('tr');
                let nm = document.createElement('td');
                nm.textContent = product;
                
                let qnty = document.createElement('td');
                qnty.textContent = quantity;
                
                let prc = document.createElement('td');
                prc.textContent = price;
                
                let totals = document.createElement('td');
                totals.textContent = total;
                
                newRow.appendChild(id);
                newRow.appendChild(nm);
                newRow.appendChild(qnty);
                newRow.appendChild(prc);
                newRow.appendChild(totals);
                tbody.appendChild(newRow);
            }
            
            updateTotals();
            table.appendChild(tbody);
        });
    }
    
    function updateTotals() {
        let grandTotal = 0;
        
        // Calculate sum of all totals
        for(let row of tbody.rows) {
            if (row.cells[4] && !isNaN(parseInt(row.cells[4].textContent))) {
                grandTotal += parseInt(row.cells[4].textContent);
            }
        }
        
        
        let footer = table.querySelector('tfoot');
        if (!footer) {
            footer = document.createElement('tfoot');
            table.appendChild(footer);
        }
        
        let footerRow = footer.querySelector('tr');
        if (!footerRow) {
            footerRow = document.createElement('tr');
            footer.appendChild(footerRow);
        }
        
        let totalCell = footerRow.querySelector('th:last-child');
        if (!totalCell) {
            totalCell = document.createElement('th');
            footerRow.appendChild(totalCell);
        }
        
        totalCell.textContent =`${grandTotal}`;
    }
}

attachBuyEvents();