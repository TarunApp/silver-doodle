import { Document, Packer, PageOrientation, Paragraph} from 'docx'
import {saveAs} from 'file-saver'

const Generate = (content) => {

	const doc = new Document({
        sections: [{
            size: {
                orientation: PageOrientation.LANDSCAPE,
            },
            children: [new Paragraph("Hello World")],
        }],
    });

	Packer.toBlob(doc).then(blob => {
		console.log(blob)
		saveAs(blob, "Example.docx")
		console.log("Document Created Successfully")
	})

}

export default Generate