import react from 'react'
import {useState, useEffect} from 'react'


const GetFile = (props) => {

	const [eventdata,SetEventData] = useState([])

	useEffect(() => {
		fetch(`http://history.muffinlabs.com/date/${}/${}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			SetEventData(data.data.Events)
		})
	},[])

	return (
		<div className="data margin-top-m">
			<h1>Hello Test</h1>	
			<p>Length is{eventdata.length}</p>
		</div>
		)
}


export {GetFile}