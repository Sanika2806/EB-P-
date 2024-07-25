document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for initial display (replace with actual API fetch)
    const portfolioData = [
        { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, price: 150.50 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 20, price: 300.25 },
        // Add more stocks as needed
    ];

    const transactionData = [
        { type: 'BUY', symbol: 'AAPL', quantity: 10, price: 150.50, timestamp: '2024-07-25 10:00:00' },
        { type: 'SELL', symbol: 'MSFT', quantity: 10, price: 305.75, timestamp: '2024-07-25 11:30:00' },
        // Add more transactions as needed
    ];

    const portfolioSection = document.getElementById('portfolio');
    const transactionsSection = document.getElementById('transactions');

    // Function to render portfolio
    function renderPortfolio(data) {
        portfolioSection.innerHTML = `<h2>Portfolio</h2>`;
        data.forEach(stock => {
            portfolioSection.innerHTML += `
                <div class="stock">
                    <p><strong>${stock.symbol}</strong> - ${stock.name}</p>
                    <p>Quantity: ${stock.quantity}</p>
                    <p>Price: $${stock.price.toFixed(2)}</p>
                </div>
            `;
        });
    }

    // Function to render transaction history
    function renderTransactions(data) {
        transactionsSection.innerHTML = `<h2>Transaction History</h2>`;
        data.forEach(transaction => {
            transactionsSection.innerHTML += `
                <div class="transaction">
                    <p>${transaction.timestamp} - ${transaction.type} ${transaction.quantity} ${transaction.symbol} at $${transaction.price.toFixed(2)}</p>
                </div>
            `;
        });
    }

    // Initial render
    renderPortfolio(portfolioData);
    renderTransactions(transactionData);
});
