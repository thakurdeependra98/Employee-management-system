import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react'
import Home from "../components/Home";
import Creat from "../components/Create";
import Update from "../components/Update";

const route = () => {
  return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Creat />} />
                    <Route path="/update" element={<Update />} />
                </Routes>
        </>
  )
}

export default route
