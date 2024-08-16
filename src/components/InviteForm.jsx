import { useState } from 'react';
import axios from 'axios';

const InviteForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/invite', { name, phone });
      alert('Invitation sent');
    } catch (error) {
      console.error('There was an error sending the invitation:', error);
      alert('Failed to send invitation. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Send Invitation</button>
    </form>
  );
};

export default InviteForm;
