import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [bookingTime, setBookingTime] = useState("");

  useEffect(() => {
    axios.get("https://api.example.com/fields") // Ganti dengan API backend
      .then(response => setFields(response.data))
      .catch(error => console.error("Error fetching fields:", error));
  }, []);

  const handleBooking = () => {
    axios.post("https://api.example.com/book", {
      field: selectedField,
      time: bookingTime
    })
    .then(response => alert("Booking berhasil!"))
    .catch(error => alert("Booking gagal"));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">AI SportBook</h1>
      <select 
        className="w-full p-2 border" 
        onChange={(e) => setSelectedField(e.target.value)}>
        <option value="">Pilih Lapangan</option>
        {fields.map(field => (
          <option key={field.id} value={field.id}>{field.name}</option>
        ))}
      </select>
      <input 
        type="datetime-local" 
        className="w-full p-2 mt-2 border" 
        onChange={(e) => setBookingTime(e.target.value)}
      />
      <button 
        className="w-full p-2 mt-4 bg-blue-500 text-white"
        onClick={handleBooking}
        disabled={!selectedField || !bookingTime}
      >
        Pesan Sekarang
      </button>
    </div>
  );
};

export default App;

