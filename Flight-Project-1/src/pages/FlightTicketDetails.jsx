import React from 'react'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap"
import { FlightContext } from "../context/FlightContext";
// import AllFlights from '../constant/flight';
const FlightTicketDetails = () => {
  const { mybooking, selectedId, setSelectedId } = useContext(FlightContext);
  const [foundFlights, setfoundFlight] = useState("");

  useEffect(() => {
    const foundFlight = mybooking.find((foundFlights) => {
      if (foundFlights.id === selectedId) {
        return true;
      }
    });

    if (foundFlight) {
      setfoundFlight(foundFlight);
    }
  }, [mybooking, selectedId]);

  const navigate = useNavigate();

  function goToFlightAllHistory(flightid) {
    setSelectedId(flightid)
    goTo("/flightallhistory-page");
    
  };

  function goTo(path) {
    navigate(path);
  };
  return (
    <Container>
      <div className="header">
        <h1>FliightTicketDetails-page</h1>
      </div>
      <div className="main">
        <h1 scope="row">Flight Id: {foundFlights.id}</h1>
        <h1 scope="row"> fromflight: {foundFlights.fromflight}</h1>
        <h1 scope="row"> To Flight: {foundFlights.toflight}</h1>
        <h1 scope="row"> journeydate: {foundFlights.journeydate}</h1>
        <h1 scope="row"> Prasenger: {foundFlights.prasenger}</h1>
      </div>
      <Button onClick={() => { goToFlightAllHistory(foundFlights.id) }}>Search History</Button>
    </Container>
  )
}

export default FlightTicketDetails
