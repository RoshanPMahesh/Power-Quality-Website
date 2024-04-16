//import axios from 'axios';
//import { w3cwebsocket as WebSocket } from 'websocket';
//import { Line } from 'react-chartjs-2';

import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import io from 'socket.io-client';


const QualityContent = () => {
  const [data, setData] = useState({ voltage: [], current: [], apparentPower: [], realPower: [] });
  const chartRefs = useRef({ voltage: null, current: null, apparentPower: null, realPower: null });

  useEffect(() => {
    const socket = io('http://localhost:8080');

    socket.on('ECEB', (newData) => {
      // i dont think it should append data to itself - definetly a bug
      newData.forEach(entry => {
        setData(prevData => ({
          voltage: [...prevData.voltage, entry.voltage],
          current: [...prevData.current, entry.current],
          apparentPower: [...prevData.apparentPower, entry.apparent_power],
          realPower: [...prevData.realPower, entry.real_power]
        }));
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    Object.keys(data).forEach((metric) => {
      //console.log(data);
      if (data[metric].length > 0) {
        renderChart(metric, data[metric]);
      }
    });
  }, [data]);

  const renderChart = (metric, chartData) => {
    const ctx = document.getElementById(`${metric}Chart`);
    if (!chartRefs.current[metric]) {
      chartRefs.current[metric] = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.map((row) => row.measurement_time),
          datasets: [{
            label: `${metric} Data`,
            data: chartData.map((row) => row[metric]),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {

            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      chartRefs.current[metric].data.labels = chartData.map((row) => row.measurement_time);
      chartRefs.current[metric].data.datasets[0].data = chartData.map((row) => row[metric]);
      chartRefs.current[metric].update();
    }
  };

  return (
    <div>
      <div>
        <canvas id="voltageChart" width="400" height="200"></canvas>
      </div>
      <div>
        <canvas id="currentChart" width="400" height="200"></canvas>
      </div>
      <div>
        <canvas id="apparentPowerChart" width="400" height="200"></canvas>
      </div>
      <div>
        <canvas id="realPowerChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};




// const QualityContent = () => {
//   const [ecebData, setEcebData] = useState([]);
//   const ecebChartRef = useRef(null);

//   useEffect(() => {
//     const socket = io('http://localhost:8080');

//     socket.on('ECEB', (newData) => {
//       setEcebData(newData);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     renderChart('ECEB', ecebData);
//   }, [ecebData]);

//   const renderChart = (outletName, data) => {
//     if (data.length === 0) return;

//     if (!ecebChartRef.current) {
//       const labels = data.map((row) => row.measurement_time);
//       const realPowerData = data.map((row) => row.real_power);

//       const ctx = document.getElementById(`${outletName}Chart`);
//       ecebChartRef.current = new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: labels,
//           datasets: [{
//             label: `${outletName} Real Power`,
//             data: realPowerData,
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//           }]
//         },
//         options: {
//           scales: {
            
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     } else {
//       ecebChartRef.current.data.labels = data.map((row) => row.measurement_time);
//       ecebChartRef.current.data.datasets[0].data = data.map((row) => row.real_power);
//       ecebChartRef.current.update();
//     }
//   };

//   return (
//     <div>
//       <div>
//         <canvas id="ECEBChart" width="150" height="75"></canvas>
//       </div>
//     </div>
//   );
// };

export default QualityContent;
