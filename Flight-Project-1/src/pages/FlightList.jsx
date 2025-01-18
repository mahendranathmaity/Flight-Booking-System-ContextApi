import React, { useContext } from 'react'
//import Navbar from '../navbar/Navbar';
import { useNavigate } from "react-router-dom"
import AllFlights from '../constant/flight';
import { FlightContext } from '../context/FlightContext';


function FlightList() {
  const { setSelectedId } = useContext(FlightContext);

  const navigate = useNavigate()
  function goToSearchFlight(flightId) {
    setSelectedId(flightId)
    goTo("/searchflight-page");
  }
  function goTo(path) {
    navigate(path)
  }
  return (
    <div>
      <h1><u>Flight-ListPage</u></h1>
      {/* <div className='header'>
      <Navbar />
    </div> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Flight Name</th>
            <th scope="col">Deparature Time</th>
            <th scope="col">Arrive End</th>
            <th scope="col">Bording At</th>
            <th scope="col">Destination</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
          {AllFlights.map((flight, index) => {
            return <tr key={index}>
              <td>{flight.id}</td>
              <td>{flight.name}</td>
              <td>{flight.startTime}</td>
              <td>{flight.endTime}</td>
              <td>{flight.startPlace}</td>
              <td>{flight.endPlace}</td>
              <td>{flight.price}</td>
              <td>
                <button onClick={() => { goToSearchFlight(flight.id) }}>Details</button>
              </td>
            </tr>
          })}
        </thead>
      </table>
    </div>
  )

}
export default FlightList




