import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import RadioGroupRating from "./MoodRating";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/entriesSlice"

function CreateArea() {

    const entries = useSelector((state) => state.entriesSlice.entries);

    const [entry, setEntry] = useState({
        id: entries.length + 1,
        content: '',
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        lastEdited: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        emotion: null
    });

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to='/' />
    }

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
        event.preventDefault();
        dispatch(add(entry));
        setRedirect(true)
    }

    return (<div>
        <form 
        className="create-area">
            <textarea name="content" onChange={handleChange} value={entry.content} placeholder="Put your thoughts here..." rows="9" />
            <hr className=".custom-hr"/>
            <p>How are you feeling?</p>
            <RadioGroupRating passage={handleChange} name="emotion" value={entry.emotion} />
        
        <button className="save-button" onClick={submitEntry}>Save</button>
        </form>
    </div>)
}

export default CreateArea; 