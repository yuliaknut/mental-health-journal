import React from "react";
import Entry from "../components/Entry";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Zoom } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";

export default function ViewEntry() {
    const params = useParams();
    const entries = useSelector((state) => state.entriesSlice.entries);
    const entry = entries.id[params.id - 1];
    const [redirectToCreate, setRedirectToCreate] = useState(false);

    

    if (redirectToCreate) {
        return <Navigate to='/newentry' />
        setRedirectToCreate(false);
    }
    
    return (<div>
        <h1 className="page-title">Take a look back at {entry.date}</h1>
        <Entry />
        <div className="aligned">
        <Link className="ref" to="/">go back to all entries</Link>
        </div>
        <div className="float">
                <Zoom in={true}>
                    <button className="float" onClick={() => {setRedirectToCreate(true)}}><CreateIcon/></button>
                </Zoom>
                </div>    
    </div>)

}