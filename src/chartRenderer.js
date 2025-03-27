

async function displayChart() {
  try {
    await fetchData();
    console.log("dataService.result:",fetchData.result);
    console.log("dataService.cityName:", fetchData.cityName);

    const chartData = transformWeatherData(fetchData.result, fetchData.cityName);
    console.log("Chart Data:", chartData);
    if (chartData) {
      createChart("myChart", chartData);
    } else {
      console.error("chartData is invalid, cannot create chart.");
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function transformWeatherData(rawData, cityName) {
  if (!rawData) return null;
  return {
    labels: ["Temperature", "Humidity", "Pressure"],
    data: [rawData.temp, rawData.humidity, rawData.pressure],
    cityName: cityName,
  };
}

function createChart(canvasId, chartData) {
  const ctx = document.getElementById(myChart).getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartData.labels,
      datasets: [{
        label: chartData.cityName + " Weather",
        data: chartData.data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

displayChart();