import Chart from 'chart.js/auto';

let apiUrl:string;

apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Addis%20Ababa&units=metric&appid=a4661461d496b322c01ee685b11066cb';

interface WeatherData {
    temp:number;
    humidity:number;
    pressure:number;
  }

let result :WeatherData ={
  temp:0,
  humidity:0,
  pressure:0
};
let cityName :string ="";

async function displayChart(apiUrl:string) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    

        const data = await response.json();
        const { temp, humidity, pressure } = data.main;
        const { name }  = data;
        result = { temp, humidity, pressure };
        cityName = data.name;

        console.log(result);
        console.log({ name: cityName }); 
  
        // const chartData = transformWeatherData(result,cityName);
        // console.log("Chart Data:", chartData);

        // if (chartData) {
        //   createChart("myChart", chartData);
        // } else {
        //     console.error("chartData is invalid, cannot create chart.");
        // }
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
  }
  
//  function transformWeatherData(rawData:string, cityName:string) {
//    if (!rawData) return null;
//   return {
//         labels: ["Temperature", "Humidity", "Pressure"],
//         data: [rawData.temp, rawData.humidity, rawData.pressure],
//         cityName: cityName,
//     };
// }
  



// function createChart(canvasId, chartData) {

// const ctx = document.getElementById(Chart).getContext("2d");
//  new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: chartData.labels,
//         datasets: [{
//           label: chartData.cityName + " Weather",
//           data: chartData.data,
//           backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//           borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//           borderWidth: 1,
//         }],
//       },
//       options: {
//         scales: {
//           y: { beginAtZero: true },
//         },
//       },
//     });
//   }
  
//   displayChart(apiUrl);


