import React, { useState } from 'react';
import Sidenav from "../components/Sidenav";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QRCode } from 'react-qrcode-logo';
import '../index.css'
import Alert from '@mui/material/Alert';
export default function Createqr() {
    const [text, setText] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleShowLink = () => {
        if (showQR) {
          setShowLink(!showLink);
        }
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
        setShowError(false);

    };

    const handleShowQR = () => {
        if (text.trim() === "") {
            setShowError(true); 
        } else {
            setShowQR(true);
        }
        setShowLink(true);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <div className="container mx-auto ">
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Accordion expanded={true} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                QR oluştur
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <form className="p-7">
                            <input type="text" placeholder="QR Kodunuzun Adı"  className="mb-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </form>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Accordion onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Web Sayfası Bilgisi
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <input type="text" value={text} onChange={handleTextChange} disabled={showQR} className="mb-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='https://www.google.com'/><br/>
                            <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={handleShowQR} disabled={showQR}>Oluştur</button>
                            {showError && (
                                <Alert severity="error">Link kısmı boş olamaz.</Alert>
                            )}

                            {showQR && text.trim() !== "" && (
                                <div>
                                    <QRCode value={text} />
                                    <h1>
                                        {text} <b>Linkiniz.</b>
                                    </h1>
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>
        </Box>
    )
}
