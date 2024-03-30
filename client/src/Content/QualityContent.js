import React, {useEffect, useState} from 'react';
import axios from 'axios';

function QualityContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/data'); // Adjust the URL based on your backend server configuration
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.data_id}>
            {item.outlet_name} - {item.load_name} - {item.measurement_time}
          </li>
        ))}
      </ul>
    </div>
  );

  //return <div>Quality</div>;
}

export default QualityContent;
