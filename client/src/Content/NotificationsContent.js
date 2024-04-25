import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './NotificationsContent.css';

function NotificationsContent() {
  const [errorLogs, setErrorLogs] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:8080');

    socket.on('NOTIF', (newData) => {
      newData.forEach((log) => {
        log.measurement_time = log.measurement_time.replace(/[a-zA-Z]/g, ' ');
      });

      setErrorLogs(newData); // Replace errorLogs with the new data
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const renderLogs = () => {
    if (errorLogs.length === 0) {
      return <h3>No voltage fluctuations</h3>; // Display message when there are no error logs
    }

    return (
      <div className="container">
        <h2 className="heading">Error Logs</h2>
        <div className="logContainer">
          {errorLogs.map((log, index) => (
            <div key={index} className="logItem">
              <div><span className="label">Timestamp:</span> {log.measurement_time}</div>
              <div><span className="label">Message:</span> Power outlet voltage at {log.voltage}V</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return renderLogs(); // Call renderLogs function to render the logs
}

export default NotificationsContent;
