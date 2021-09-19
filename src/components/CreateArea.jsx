import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputNote, setInputNote] = React.useState({
    //saving the state of input text using inputNote in the form of an object containing title and content
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = React.useState(false);

  function handleInputNote(event) {
    const { name, value } = event.target; //Destructuring the event which has been captured via Onchange of input and textarea
    inputNote[name] = value; //setting the name as key and value as value to form key-value pair
    setInputNote({ ...inputNote }); // passing setInputNote setter state with input note and spread operator to append the input at the end array
  }

  function submitNote(event) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleExpansion() {
    return setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleInputNote}
            name="title"
            placeholder="Title"
            value={inputNote.title}
          ></input>
        )}
        <textarea
          onChange={handleInputNote}
          onClick={handleExpansion}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputNote.content}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
