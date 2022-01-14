import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table } from './Design/Design';

function GetData() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const getData = async () => {
		await axios.get('https://randomuser.me/api')
			.then((response) => {
				const allUsers = response.data;

				const getSpecific = allUsers.results.map((row) => {
					return {
						first_name: row.name.first,
						last_name: row.name.last,
						email: row.email
					}
				})

				//set data
				setData(getSpecific)
				setLoading(false)
			})
			.catch(error => {
				setLoading(false)
				setError(error.message)
			})
	}

	useEffect(() => {
		getData();
	}, [])

	useEffect(() => {
		localStorage.setItem("Data", JSON.stringify(data))
	}, [data])


	const title = ["First Name", "Last Name", "Email"];
	const row = data.map((row) => {
		return [row.first_name, row.last_name, row.email]
	})
	return (
		<div className="main">
			{error.length > 0 ?
				<p className='error'>{error}</p> : ''
			}

			<Table title={title} row={row} loading={loading} />
		</div>
	);
}

export default GetData;
