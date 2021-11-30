import './App.css';

import ChildLandingPage from './landingpages/ChildLandingPage.js';
import ParentLandingPage from './landingpages/ParentLandingPage';
import SchoolLandingPage from './landingpages/SchoolLandingPage.js';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lpenfant" caseSensitive={false} element={<ChildLandingPage />} />
        <Route path="/lpparent" caseSensitive={false} element={<ParentLandingPage />} />
        <Route path="/lpecole" caseSensitive={false} element={<SchoolLandingPage />} />
      </Routes>
    </Router>
  );
}
