const data = {
    labels: ["6:50", "7:50", "8:50", "9:50", "10:50", "11:50", "12:50", "13:50", "14:50", "15:50", "16:50", "17:50", "18:50"],
    datasets: [{
      label: "Glicemia",
      data: [422,422,418,369,362,325,304,348,297,321,293],
      fill: true,
      backgroundColor: "rgba(151,187,205,0.2)",
      borderColor: "rgba(151,187,205,1)",
      tension: 0.4, // suaviza a linha
      pointBackgroundColor: "rgba(151,187,205,1)",
      pointBorderColor: "#fff"
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };
  
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, config);
  
