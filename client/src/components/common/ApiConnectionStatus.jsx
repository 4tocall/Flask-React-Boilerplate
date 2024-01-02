import React, { useState, useEffect } from 'react';

function ApiConnectionStatus() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error ? <p>Error: {error}</p> : <p>{message}</p>}
    </div>
  );
}

export default ApiConnectionStatus;