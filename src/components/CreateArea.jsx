import { PropaneSharp } from "@mui/icons-material";
import React, {useState} from "react";
import RadioGroupRating from "./MoodRating";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/entriesSlice"



function CreateArea() {

    const [entry, setEntry] = useState({
        content: '',
        date: new Date().toDateString(),
        lastEdited: new Date().toDateString(),
        emotion: ''
    });

    //const entries = useSelector((state) => state.entriesSlice.entries);
    const dispatch = useDispatch();

    function handleChange(event) {
        const {name, value} = event.target;
        
        setEntry(prevValue => {
            return {
                ...prevValue, 
                [name]: value,
            };
        });
        
    }

    function submitEntry(event) {
        setEntry({
            content: '',
            date: new Date().toDateString(),
            lastEdited: new Date().toDateString(),
            emotion: ''
        });
        event.preventDefault();

        return dispatch(add(entry));
    }

    return (<div>
        <form 
        className="create-area">
            <textarea name="content" onChange={handleChange} value={entry.content} placeholder="Put your thoughts here..." rows="9" />
            <hr/>
            <p>How are you feeling?</p>
            <RadioGroupRating passage={handleChange} name="emotion" value={entry.emotion} />
        
        <button className="save-button" onClick={submitEntry}>Save</button>
        </form>
    </div>)
}

export default CreateArea; 