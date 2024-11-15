const ctx = document.getElementById('mrrChart').getContext('2d');
const mrrChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan'],
        datasets: [
            { label: 'Total MRR', data: [4000, 4500, 4800, 5200, 5500, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 7200, 7500, 7800, 8100, 8300, 8600, 9000], backgroundColor: '#FF6384' },
            { label: 'New MRR', data: [1500, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900], backgroundColor: '#36A2EB' },
            { label: 'Reactivations', data: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400], backgroundColor: '#4BC0C0' },
            { label: 'Upgrades', data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800], backgroundColor: '#FFCE56' },
            { label: 'Existing', data: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800], backgroundColor: '#9966FF' },
            { label: 'Downgrades', data: [200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380], backgroundColor: '#FF9F40' },
            { label: 'Churn', data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280], backgroundColor: '#C45850' }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
            },
            y: {
                stacked: true,
                grid: { color: '#2C2D3C' },
                ticks: { color: '#EEEFFC' }
            }
        },
        plugins: {
            legend: { labels: { color: '#EEEFFC' } },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: '#1E1E2F',
                titleFont: { size: 16, weight: 'bold', color: '#EEEFFC' },
                bodyFont: { size: 14, color: '#EEEFFC' },
                footerFont: { size: 14, style: 'italic', color: '#EEEFFC' },
                padding: 12,
                displayColors: true,
                callbacks: {
                    title: function(context) {
                        // Show the date
                        return `Date: ${context[0].label}`;
                    },
                    label: function(tooltipItem) {
                        // Show each dataset's label and value
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`;
                    },
                    footer: function(tooltipItems) {
                        // Calculate the Net MRR (sum of all values for that date)
                        const total = tooltipItems.reduce((sum, item) => sum + item.raw, 0);
                        return `Net MRR: $${total.toLocaleString()}`;
                    }
                }
            }
        }
    }
});
