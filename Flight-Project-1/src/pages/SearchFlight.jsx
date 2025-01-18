import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import AllFlights from "../constant/flight"
import { FlightContext } from '../context/FlightContext';

const SearchFlight = () => {
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
  const navigate = useNavigate();
  function goToFlightTicketBooking() {
    setMyBoking((oldBookings) => {
      oldBookings.push(flight)
      return oldBookings;
    })
    goTo("/flightallhistory-page");
    var obj = { flight }
    console.log("Flight Booking sucessfully", { obj });
  };
  function goTo(path) {
    navigate(path);
  };
  return (
    <div className="Container">
      <div className="header">
        <h1>{flight.id}</h1>
        <h1>{flight.name}</h1>
        <h1>{flight.startTime}</h1>
        <h1>{flight.endTime}</h1>
        <h1>{flight.startPlace}</h1>
        <h1>{flight.endPlace}</h1>
        <Button className="btn btn-primary" onClick={goToFlightTicketBooking}>Details</Button>
      </div>
    </div>
  )
}

export default SearchFlight
