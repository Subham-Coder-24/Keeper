import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [is, setis] = useState(false);
    const [note, setnote] = useState({
        title: " ",
        content: " "
    });

    function handelChange(event) {
        const { name, value } = event.target
        setnote((preitem) => {
            return {
                ...preitem,
                [name]: value
            };
        });

    }

    function submitnote(event) {
        props.onAdd(note);
        setnote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand() {
        setis(true);
    }
    return (
        <div>
            <form className="create-note" >
                {is && <input
                    name="title"
                    placeholder="Title"
                    onChange={handelChange}
                // value={note.title}
                />}

                <textarea
                    name="content"
                    onClick={expand}
                    placeholder="Take a note..." 
                    
                    rows={is?3:1}
                    onChange={handelChange}
                // value={note.content}
                />
                <Zoom in={is}>
                    <Fab onClick={submitnote} ><AddIcon /></Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;
