import './App.css';

import ChildLandingPage from './landingpages/ChildLandingPage.js';
import ParentLandingPage from './landingpages/ParentLandingPage.js';
import SchoolLandingPage from './landingpages/SchoolLandingPage.js';
import CallApi from './CallApiExemplePourClementine.js';
import Map from './Map.js';

import HourWidget from './Widgets/HourWidget.js';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (

    <HourWidget/>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Map />} />
    //     <Route path="/lpenfant" caseSensitive={false} element={<ChildLandingPage />} />
    //     <Route path="/lpparent" caseSensitive={false} element={<ParentLandingPage />} />
    //     <Route path="/lpecole" caseSensitive={false} element={<SchoolLandingPage />} />
    //     <Route path="/api" caseSensitive={false} element={<CallApi />} />
    //   </Routes>
    // </Router>
  );
}
