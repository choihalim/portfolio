import { useState } from 'react';
import { Document, Page, PDFDownloadLink, pdfjs } from 'react-pdf'
import resume from '../assets/resume.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import "react-pdf/dist/esm/Page/TextLayer.css"
import '../Resume.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function Resume({ darkMode }) {
    const [numPages, setNumPages] = useState(null)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }


    return (
        <div className={`resume ${!darkMode ? 'dark-mode' : ''}`}>
            <div>
                <Document
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                className="pdf-page"
                            />
                        ),
                    )}
                </Document>
                {/* <p>Page {numPages} of {numPages}</p> */}
            </div>
            <Button variant={!darkMode ? 'secondary' : 'success'} href={resume} download="HalimChoiResume.pdf" style={{ padding: '15px', marginLeft: '100px' }}>
                {!darkMode ? <FontAwesomeIcon icon={faFileArrowDown} bounce size="lg" style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faFileArrowDown} bounce size="lg" style={{ color: "#ffffff", }} />}
            </Button>
        </div>
    )
}

export default Resume
