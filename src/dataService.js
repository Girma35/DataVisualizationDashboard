"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiUrl;
apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Addis%20Ababa&units=metric&appid=a4661461d496b322c01ee685b11066cb';
var result = {
    temp: 0,
    humidity: 0,
    pressure: 0
};
var cityName = "";
function displayChart(apiUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a, temp, humidity, pressure, name_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _b.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    _a = data.main, temp = _a.temp, humidity = _a.humidity, pressure = _a.pressure;
                    name_1 = data.name;
                    result = { temp: temp, humidity: humidity, pressure: pressure };
                    cityName = data.name;
                    console.log(result);
                    console.log({ name: cityName });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Error fetching or processing data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
