import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


export default function Entry() {

    const params = useParams();
    const entries = useSelector((state) => state.entriesSlice.entries);
    const entry = entries[params.id - 1];

    const moodIcons = {
        1: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
        2: <SentimentDissatisfiedIcon color="warning" fontSize="large" />,
        3: <SentimentSatisfiedIcon color="yellow" fontSize="large" />,
        4: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
        5: <SentimentVerySatisfiedIcon color="success" fontSize="large" />
    }


    return (<div className="entry">
       {console.log(entry)}
      <p className="display-content">{entry.content}</p>
      <br/>
      <p className="display-mood">{moodIcons[entry.emotion]}</p>
      <br/>
      <p className="display-last-edited">Last edited: {entry.date}</p>
    </div>)
}