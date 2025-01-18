import './App.css'
import { RouterProvider } from "react-router-dom";
import { FlightContext } from "./context/FlightContext";

import router from "./router";
import React, { useState } from 'react';

function App() {
  const [userdata, setUserdata] = useState([]);
  const [mybooking, setMyBoking] = useState([])
  const [selectedId, setSelectedId] = useState([])

  return (
    <>
      <div>
        <FlightContext.Provider value={{
          userdata,
          setUserdata,
          mybooking,
          setMyBoking,
          selectedId,
          setSelectedId
        }}
        >
          <RouterProvider router={router} />
        </FlightContext.Provider>
      </div>
    </>
  )
}

export default App




