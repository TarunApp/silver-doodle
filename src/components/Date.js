import '../main.css'
import {useState} from 'react'
import docx from "docx";

const Date = (props) => {

	const [date,SetDate] = useState(0)

	const onInput = (e) => {
		SetDate(e.target.value)
		props.onDate(e.target.value) //local
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if(date == 0){
			alert('Please enter a correct date')	
		}else{
		console.log(date)
		}
	}

	return (
		<div className='date box-shadow-xl'>
			<h1 className="title">Test</h1>
			<label htmlFor="date"><strong>Date</strong></label>
			<input name="date" className='box-shadow-xl' onChange={onInput} value={date} type="date"/>
			<div className="container-column padding-top-m">
				<button onClick={onSubmit}>Generate</button>
				{/*<p>{date !== 0 ? date : 'No Date'}</p>*/}
			</div>
		</div>
		)
}



export default Date