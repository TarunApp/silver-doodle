import react from 'react'
import {useState, useEffect} from 'react'
import {saveAs} from 'file-saver'
import { Document, Packer, PageOrientation, Paragraph} from 'docx'
import Generate from './Generate'

const GetFile = (props) => {

	const [eventdata,SetEventData] = useState({event: "Asdjkes"})
	// const [day, SetDay] = useState({month: 0, day: 0})

	// const Generate = () => {
	// 	const doc = new Document({
 //        sections: [{
 //            size: {
 //                orientation: PageOrientation.LANDSCAPE,
 //            },
 //            children: [new Paragraph("Hello World")],
 //        }],
 //    });

	// Packer.toBlob(doc).then(blob => {
	// 	console.log(blob)
	// 	saveAs(blob, "Example.docx")
	// 	console.log("Document Created Successfully")
	// })
	// }

	useEffect(() => {

		if(props.date != 0){
			console.log('testing')
		// fetch(`http://history.muffinlabs.com/date/6/10`)
		// .then(res => res.json())
		// .then(data => {
		// 	// console.log(data)
		// 	SetEventData(data.data.Events)
		// 	})
		}else{
			SetEventData([])
		}
	},[props.date])

	return (
		<div className="data margin-top-m">
			<h1>Hello Test</h1>	
			<p>Length is {eventdata.length > 0 ? eventdata.length : "No Data"}</p>
			<button onClick={Generate}>Make File</button>
		</div>
		)
}


export {GetFile}