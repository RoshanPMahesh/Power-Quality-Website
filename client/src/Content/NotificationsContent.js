import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './NotificationsContent.css';

function NotificationsContent() {
  const [errorLogs, setErrorLogs] = useState([]);

  useEffect(() => {
    // Load error logs from local storage when component mounts
    const storedLogs = localStorage.getItem('errorLogs');
    if (storedLogs) {
      setErrorLogs(JSON.parse(storedLogs));
    }

    const socket = io('http://localhost:8080');

    socket.on('NOTIF', (newData) => {
      // Create a new log object with timestamp and message
      const newLog = {
        timestamp: 0,
        message: `Power outlet voltage at ${newData[0].voltage}V`
      };

      // Update errorLogs state by merging the new log with the existing logs
      setErrorLogs(prevLogs => [newLog, ...prevLogs]);

      // Store updated logs in local storage
      localStorage.setItem('errorLogs', JSON.stringify([newLog, ...errorLogs]));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Error Logs</h2>
      <div className="logContainer">
        {console.log(errorLogs)}
        {errorLogs.map((log, index) => (
          <div key={index} className="logItem">
            <div><span className="label">Timestamp:</span> {log.timestamp}</div>
            <div><span className="label">Message:</span> {log.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsContent;

// Whats left:
// 1. Having time of issue
// 2. Having the notifications button have a dot or some indication of a new notif
// 3. Styling