import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import MyCmp from "./Components/MyCmp";
import MyC from "./Components/MyC";
import CounterF from "./Components/CounterF";
import ListManagerF from "./Components/ListManagerF";
import ListM from "./Components/ListM";
import NavigationBar from "./Components/NavigationBar" ; 
import { Route, Routes } from "react-router-dom";
import HomeF from "./Components/HomeF";
import {Suspense , lazy} from "react" ; 
import NotFound from "./Components/NotFound"; 
const  Events  = lazy(()=> import ("./Components/Events") );
const EventDetails  = lazy(()=>  import ("./Components/EventDetails") );
function App() {
  return (
    <>
    <NavigationBar/>
    <Suspense fallback={<h3> Chargement en cours ...</h3>}>
      <Routes>
        
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/events">
        <Route path="list" element={<Events/>}/>
        <Route path="details/:id" element={<EventDetails/>}/>
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
