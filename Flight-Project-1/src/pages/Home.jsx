import { Button } from "react-bootstrap";
// import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllFlights from "../constant/flight";

import React, { useContext, useEffect, useState } from 'react'
import { FlightContext } from '../context/FlightContext';

const Home = () => {
  const { setSelectedId } = useContext(FlightContext);

  function goToSearchFlight(flightId) {
    setSelectedId(flightId)
    goTo("/searchflight-page");
  }

  const [filter, setFilter] = useState({ startPlace: '', endPlace: '' });
  const [filteredData, setFilteredData] = useState(AllFlights);

  const [flight, setflight] = useState([])
  const { selectedId, setMyBoking } = useContext(FlightContext);
  useEffect(() => {
    const foundFlight = AllFlights.find((flight) => {
      if (flight.id === selectedId) {
        return true;
      }
    });

    if (foundFlight) {
      setflight(foundFlight);
    }
  }, [selectedId]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const filtered = AllFlights.filter((row) => {
      return (
        // (filter.id === '' || row.id.toString() === filter.id) &&
        (filter.startPlace === '' || row.startPlace.toLowerCase().includes(filter.startPlace.toLowerCase()) && filter.endPlace === '' || row.endPlace.toLowerCase().includes(filter.endPlace.toLowerCase()))
      );

    });
    setFilteredData(filtered);
    // goTo("/flightlist-page")
  };
  const navigate = useNavigate();
  function goToFlightAllHistory() {
    goTo("/flightallhistory-page");
  }

  function goToFlightTicketBooking() {
    setMyBoking((oldBookings) => {
      oldBookings.push(flight)
      return oldBookings;
    })
    goTo("/flightallhistory-page");
  };


  function goTo(path) {
    navigate(path);
  }
  return (
    <div>
      <h1><u><i>Booking-Flight</i></u></h1>
      <div>
        <input
          type="text"
          name="startPlace"
          placeholder="Enter Your StartPlace"
          value={filter.startPlace}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endPlace"
          placeholder="Enter Your EndPlace"
          value={filter.endPlace}
          onChange={handleChange}
        />

        <Button onClick={handleFilter}>Search Flight</Button>
        Or
        <Button onClick={goToFlightAllHistory}>FlightHistory</Button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Flight Name</th>
            <th scope="col">Deparature Time</th>
            <th scope="col">Arrive End</th>
            <th scope="col">Bording At</th>
            <th scope="col">Destination</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.startTime}</td>
              <td>{row.endTime}</td>
              <td>{row.startPlace}</td>
              <td>{row.endPlace}</td>
              <td>{row.price}</td>
              <td>
                <Button className="btn btn-primary" onClick={() => { goToSearchFlight(row.id) }}>Book Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Home;







// import React, { useState } from 'react';

// const PassengerCounter = () => {
//   const [adults, setAdults] = useState(0);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);

//   const handleAdultsChange = (e) => {
//     setAdults(Number(e.target.value));
//   };

//   const handleChildrenChange = (e) => {
//     setChildren(Number(e.target.value));
//   };

//   const handleInfantsChange = (e) => {
//     setInfants(Number(e.target.value));
//   };

//   const totalPassengers = adults + children + infants;

//   return (
//     <div>
//       <div>
//         <label>
//           Adults:
//           <input type="number" value={adults} onChange={handleAdultsChange} min="0" />
//         </label>
//       </div>
//       <div>
//         <label>
//           Children:
//           <input type="number" value={children} onChange={handleChildrenChange} min="0" />
//         </label>
//       </div>
//       <div>
//         <label>
//           Infants:
//           <input type="number" value={infants} onChange={handleInfantsChange} min="0" />
//         </label>
//       </div>
//       <div>
//         <p>Total Passengers: {totalPassengers}</p>
//       </div>
//     </div>
//   );
// };

// export default PassengerCounter;