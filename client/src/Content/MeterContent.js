import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import io from 'socket.io-client';


const MeterContent = () => {
  const [data, setData] = useState({ voltage: [], current: [], apparentPower: [], realPower: [] });
  const chartRefs = useRef({ voltage: null, current: null, apparentPower: null, realPower: null });

  useEffect(() => {
    const socket = io('http://localhost:8080');

    socket.on('CHARGER', (newData) => {
      setData({
        voltage: newData,
        current: newData,
        apparentPower: newData,
        realPower: newData
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    Object.keys(data).forEach((metric) => {
      if (data[metric].length > 0) {
        renderChart(metric, data[metric]);
      } else {
        return (
          <h3>Loading...</h3>
        );
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
            data:  chartData.map((row) => {
              if (metric === 'apparentPower' || metric === 'realPower') {
                return row[metric === 'apparentPower' ? 'apparent_power' : 'real_power'];
              } else {
                return row[metric];
              }
            }),
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
      chartRefs.current[metric].data.datasets[0].data =  chartData.map((row) => {
        if (metric === 'apparentPower' || metric === 'realPower') {
          return row[metric === 'apparentPower' ? 'apparent_power' : 'real_power'];
        } else {
          return row[metric];
        }
      });
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

export default MeterContent;
