import React, {useState} from "react";
import RadioGroupRating from "./MoodRating";



function CreateArea() {

    const [entry, setEntry] = useState({
        content: '',
        date: '',
        emotion: ''
    });

    function handleChange(event) {
        console.log(event);
        const {name, value} = event.target;
        
        setEntry(prevValue => {
            return {
                ...prevValue, 
                [name]: value
            };
        });
        
    }

    function submitEntry(event) {
        setEntry()
        
    }

    return (<div>
        <form 
        className="create-area">
            <textarea name="content" onChange={handleChange} value={entry.content} placeholder="Put your thoughts here..." rows="9" />
            <hr/>
            <p>How are you feeling?</p>
            <RadioGroupRating passage={handleChange} name="emotion" value={entry.emotion} />
        </form>
        <button className="save-button" type="submit" onClick={submitEntry}>Save</button>
    </div>)
}

export default CreateArea; 