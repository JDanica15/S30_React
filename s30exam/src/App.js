import React, { useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import GetData from './GetData';


function App() {
	const [getNew, setGetNew] = useState(0);

	return (
		<div className="App">
			<Header />
			<GetData key={getNew} />
			<div className='button'>
				<button onClick={() => setGetNew(key => key + 1)}>New Name</button>
			</div>
			<Footer />
		</div>
	);
}

export default App;
