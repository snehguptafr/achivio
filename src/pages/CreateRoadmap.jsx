import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import "./css_files/CreateRoadmap.css";

export default function CreateRoadmap() {
  // useLocation().state.hasOwnProperty("userRoadmap") && const { userRoadmap } = useLocation().state;
  const location = useLocation();
  const userRoadmap = location.hasOwnProperty("state") ? location.state ? location.state.userRoadmap : false : false;
  const [checkpoints, setCheckpoints] = React.useState(userRoadmap ? JSON.parse(localStorage.getItem(userRoadmap)): []);
  const navigate = useNavigate();


  function submitHandler(e) {
    //handling first form's(checkpoints input) submit
    e.preventDefault();
    const input = document.getElementById("checkpoint-input");
    input.value.trim() &&
      setCheckpoints([
        {
          id: `${checkpoints.length + 1}`,
          value: input.value.trim(),
          isCompleted: false,
        },
        ...checkpoints,
      ]); //saving the checkpoints input in checkpoints state
    input.value = "";
  }

  function deleteEntry(checkpoint) {
    //deleting checkpoint from the lis of given checkpoints
    setCheckpoints((prevCheckpoints) => {
      return prevCheckpoints.filter(
        (prevCheckpoint) => prevCheckpoint.id !== checkpoint.id
      ); // returns all checkpoints except the one that needs to be removed and updates the checkpoints state
    });
  }

  function handleOnDragEnd(result) {
    //function to save the re-ordered checkpoints list to the state
    if (!result.destination) return; //returns nothing if the item is dragged somewhere else
    const newCheckpoints = [...checkpoints]; //checks the dropped node's position and uses splice to change its position
    const draggedItem = newCheckpoints[result.source.index];
    newCheckpoints.splice(result.source.index, 1);
    newCheckpoints.splice(result.destination.index, 0, draggedItem);
    setCheckpoints(newCheckpoints); // saves the newCheckpoints to checpoints state
  }

  const checkptsList = checkpoints.map((checkpoint, index) => {
    //maps through the checkpoints to create lists items
    return (
      <Draggable key={checkpoint.id} draggableId={checkpoint.id} index={index}>
        {(
          provided //Draggable makes the li draggable lol. all its props are as per the documentation. li only contains the checkpoint name and delete button that fires deleteEntry func
        ) => (
          <li
            className="checkpoints-li"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <span className="material-symbols-outlined">drag_indicator</span>
            {checkpoint.value}
            <button
              className="cross-but"
              onClick={() => deleteEntry(checkpoint)}
            >
              X
            </button>
          </li>
        )}
      </Draggable>
    );
  });

  function createRoadmap(e) {
    // gets fired on submission of the second form(roadmap name). Creates roadmap nodes and edges(not exactly, calls a different function to do that)
    e.preventDefault();
    const roadmapName = e.target[0].value; //gets the value of the input field
    if(userRoadmap){
      localStorage.removeItem(userRoadmap);
    }
    localStorage.setItem(roadmapName, JSON.stringify(checkpoints)); //sets the roadmap name as key and checkpoints as value in localStorage
    // generateRoadmap(roadmapName); // this actually generates the nodes and edges
    navigate("/show");
  }

  return (
    <div className="app">
      <Header />
      <section className="rm-edit">
        <div className="roadmap-building">
          <Form
            handleSubmit={submitHandler}
            autofocus={true}
            placeholder="Enter Roadmap checkpoint"
            btnText="Submit"
            value=""
          />{" "}
          {/* roadmap checkpoint input form */}
          <div className="checkpoints-list">
            {/*basically the area where things can be dragged and dropped. onDragEnd helps in saving the order of checkpoints to checkpoints state.
            droppable area renders the list. "provided" and other props/attributes are required for dnd, nothing much to see */}
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="checkpts-list">
                {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {checkptsList}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          {checkpoints.length > 1 && (
            <Form
              handleSubmit={createRoadmap}
              autofocus={false}
              placeholder="Enter Roadmap name"
              btnText="Create Roadmap"
              value={userRoadmap? userRoadmap: ""}
            />
          )}{" "}
          {/* Roadmap naming form */}
        </div>
      </section>
    </div>
  );
}
