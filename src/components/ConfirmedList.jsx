// src/components/ConfirmedList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const ConfirmedList = () => {
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  useEffect(() => {
    const fetchConfirmedGuests = async () => {
      const response = await axios.get('http://localhost:8081/api/confirmed');
      setConfirmedGuests(response.data);
    };

    fetchConfirmedGuests();
  }, []);

  return (
    <div>
      <h2>Invitados confirmados</h2>
      <ul>
        {confirmedGuests.map(guest => (
          <li key={guest._id}>{guest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConfirmedList;
