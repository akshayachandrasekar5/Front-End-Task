
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateBilling);
    });
    updateBilling();
    });
    
    function addItem() {
    const table = document.getElementById('billingTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
    <td><input type="text" value="Enter Item"></td>
    <td><input type="number" value="0" step="0"></td>
    <td><input type="number" value="0" step="0"></td>
    <td class="subtotal">0.00</td>
    `;
    newRow.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateBilling);
    });
    }
    
    function updateBilling() {
    let total = 0;
    
    document.querySelectorAll('#billingTable tbody tr').forEach(row => {
    const price = parseFloat(row.cells[1].querySelector('input').value) || 0;
    const quantity = parseInt(row.cells[2].querySelector('input').value) || 0;
    const subtotal = price * quantity;
    row.cells[3].textContent = subtotal.toFixed(2);
    total += subtotal;
    });
    
    const tax = total * 0.10;
    const grandTotal = total + tax;
    
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('grandTotal').textContent = grandTotal.toFixed(2);
    }
    
