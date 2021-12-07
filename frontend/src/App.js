import './App.css';

import ChildLandingPage from './landingpages/ChildLandingPage.js';
import ParentLandingPage from './landingpages/ParentLandingPage.js';
import SchoolLandingPage from './landingpages/SchoolLandingPage.js';
import FieldReservationCarrousel from './frames/subframes/FieldReservationCarrousel.js';
import Map from './Widgets/Map.js';
import Media from './Widgets/Media.js';
import Menu from './Menu.js';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" element={<Map />} />
				<Route path="/lpenfant" caseSensitive={false} element={<ChildLandingPage />} />
				<Route path="/lpparent" caseSensitive={false} element={<ParentLandingPage />} />
				<Route path="/lpecole" caseSensitive={false} element={<SchoolLandingPage />} />
				<Route path="/media" caseSensitive={false} element={<Media />} />
				<Route path="/api" caseSensitive={false} element={
					//<FieldReservationWidget position={{ lat: 48.831390, lng: 2.271667 }} day="4" time="10:00"/>
					<FieldReservationCarrousel position={{ lat: 48.831390, lng: 2.271667 }} day="1"/>
				} />
			</Routes>
		</Router>
	);
}
