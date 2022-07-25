const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Manje od godinu dana', '1 - 2 godine', '3 - 4 godine', '5 - 7 godine', '8 - 10 godine', '11+ godina'],
        datasets: [{
            label: 'Prosecan broj godina rada veb developera(u procentima)',
            data: [33, 36, 10, 12, 4, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },

});