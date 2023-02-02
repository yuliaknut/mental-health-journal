import React from "react";
import { useSelector } from "react-redux";
import Thumbnail from "../components/Thumbnail";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Zoom } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';

export default function Home() {

    const entries = useSelector((state) => state.entriesSlice.entries);
    //const [redirect, setRedirect] = useState("");
    const [redirectToCreate, setRedirectToCreate] = useState(false);
    const navigate = useNavigate();

    // function handleRedirect(id) {
    //     //const path = "/entry/" + id;
    //     console.log("zzzzzzzzzzzz", id);
    //     return <Navigate to={"/entry/" + id} />
    //     //return <Navigate to={path} />
    // }

    if (redirectToCreate) {
        return <Navigate to='/newentry' />
        setRedirectToCreate(false);
    }

    function handleSelect(id) {
        console.log(id);
        
        return navigate(`/entry/${id}`)
        // return <Navigate to='/newentry' />
    }

    const moodIcons = {
        1: <SentimentVeryDissatisfiedIcon color="error" />,
        2: <SentimentDissatisfiedIcon color="warning" />,
        3: <SentimentSatisfiedIcon color="yellow" />,
        4: <SentimentSatisfiedAltIcon color="success" />,
        5: <SentimentVerySatisfiedIcon color="success" />
    }

    if (entries.length === 0) {
       return <div className="aligned">
            <h1 className="page-title">No entries yet...</h1>
            <div className="float">
            <Zoom in={true}>
                    <button className="float" onClick={() => {setRedirectToCreate(true)}}><CreateIcon/></button>
                </Zoom>
            </div>    
        </div>
    } else {
        return <div>
            <h1 className="page-title">Your past entries:</h1>
            <table className="display-table">
                <thead>
                <tr className="no-hover">
                    <th className="date-column">Date</th>
                    <th className="preview-column">Preview</th>
                    <th className="mood-column">Mood</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry, index) => 
                {
                    return <Thumbnail
                        key={index}
                        id={entry.id}
                        date={entry.date}
                        content={entry.content.length <= 40 ? entry.content : entry.content.substring(0, 40).trim() + '...'}
                        emotion={moodIcons[entry.emotion]} 
                        onSelect={handleSelect}/>

                        //<Link to={"/entry/" + entry.id}></Link>
                })}  
                </tbody>

                </table>
                <div className="float">
                <Zoom in={true}>
                    <button className="float" onClick={() => {setRedirectToCreate(true)}}><CreateIcon/></button>
                </Zoom>
                </div>    
        </div>
    }
    
}