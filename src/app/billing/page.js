'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomer, removeCustomer } from '../redux/customerSlice';

export default function Billing() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [nights, setNights] = useState(1);
  const [ratePerNight, setRatePerNight] = useState(100);
  const [services, setServices] = useState([]); // Initialize services as an empty array
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddService = () => {
    const newService = { id: Date.now(), description: '', cost: 0 };
    setServices([...services, newService]); // Use spread operator to append newService to services array
  };

  const handleServiceChange = (index, event) => {
    const updatedServices = [...services];
    updatedServices[index].description = event.target.value;
    setServices(updatedServices); // Update services array with updatedServices
  };

  const handleCostChange = (index, event) => {
    const updatedServices = [...services];
    updatedServices[index].cost = parseFloat(event.target.value) || 0;
    setServices(updatedServices); // Update services array with updatedServices
  };

  const calculateTotal = () => {
    const roomTotal = nights * ratePerNight;
    const servicesTotal = services.reduce((acc, service) => acc + service.cost, 0);
    const total = roomTotal + servicesTotal;
    setTotalAmount(total);
  };

  const handleSubmitCustomer = () => {
    const newCustomer = { id: Date.now(), guestName, guestEmail, totalAmount };
    dispatch(addCustomer(newCustomer));
    // Clear form fields and reset services array after submission
    setGuestName('');
    setGuestEmail('');
    setGuestPhone('');
    setRoomType('');
    setNights(1);
    setRatePerNight(100);
    setServices([]);
    setTotalAmount(0);
  };

  return (
    <div className="main-content">
      <h2>Hotel Billing</h2>
      <div className="guest-info">
        <h3>Guest Information</h3>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Guest Name"
          required
        />
        <input
          type="email"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          placeholder="Guest Email"
          required
        />
        <input
          type="tel"
          value={guestPhone}
          onChange={(e) => setGuestPhone(e.target.value)}
          placeholder="Guest Phone"
          required
        />
      </div>
      <div className="room-details">
        <h3>Room Details</h3>
        <select onChange={(e) => setRoomType(e.target.value)} required>
          <option value="">-- Select Room Type --</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
        <input
          type="number"
          min="1"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
          placeholder="Number of Nights"
        />
        <input
          type="number"
          value={ratePerNight}
          onChange={(e) => setRatePerNight(e.target.value)}
          placeholder="Rate per Night"
        />
      </div>
      <div className="billing-items">
        <h3>Billing Items</h3>
        {services.map((service, index) => (
          <div key={service.id} className="billing-item">
            <input
              type="text"
              placeholder="Service Description"
              value={service.description}
              onChange={(e) => handleServiceChange(index, e)}
            />
            <input
              type="number"
              placeholder="Cost"
              value={service.cost}
              onChange={(e) => handleCostChange(index, e)}
            />
          </div>
        ))}
        <button onClick={handleAddService}>Add Service</button>
      </div>
      <div className="total-amount">
        <h3>Total Amount: #{totalAmount.toFixed(2)}</h3>
        <button onClick={calculateTotal}>Calculate Total</button>
      </div>
      <button onClick={handleSubmitCustomer} className="submit-button">Submit Billing</button>

      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            ID: {customer.id}, Name: {customer.guestName}, Email: <strong>{customer.guestEmail}</strong>, Total Amount: {customer.totalAmount}
            <button onClick={() => dispatch(removeCustomer(customer.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
