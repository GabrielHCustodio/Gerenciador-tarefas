import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css"

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a
          nihil tempore fugiat corporis hic ea? Eveniet iure, possimus eaque
          neque earum optio hic praesentium repudiandae. Reprehenderit
          exercitationem vitae labore.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
