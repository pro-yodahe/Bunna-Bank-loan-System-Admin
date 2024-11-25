const ctx1 = document.getElementById('loanStatusChart').getContext('2d');
const loanStatusChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Paid', 'Non-Paid'],
        datasets: [{
            data: [60, 40], // Sample data for the graph
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

const ctx2 = document.getElementById('loanGrowthChart').getContext('2d');
const loanGrowthChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Loans Granted',
            data: [10, 20, 15, 30, 25, 40], // Sample data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.1,
                to: 0,
                loop: true
            }
        }
    }
});
