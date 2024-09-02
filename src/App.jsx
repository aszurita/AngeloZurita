import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Incio/Home";

function App() {
	function NotFound() {
		return <div>404 Not Found</div>;
	}

  return (
		<>
			<Router>
        <div className='-z-1000'>
				<Routes>
					<Route exact path='/' element={<Home />} />
				</Routes>
        </div>
			</Router>
		</>
	);
}

export default App
