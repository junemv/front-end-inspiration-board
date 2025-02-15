import { React, useState } from "react";
import "./NewBoardForm.css";

const INITIAL_FORM_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log("handleChange called");
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value}`
    );
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addBoardCallbackFunc(formData);
    setFormData({
      title: "",
      owner: "",
    });
  };

  return (
    <section className="board-form">
      <form onSubmit={handleNewBoardSubmit}>
        <label htmlFor="title">Board Title</label>
        {/* htmlFor - for accessibility */}
        <input
          type="text"
          // id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>

        <label htmlFor="owner">Board Owner</label>
        <input
          type="text"
          // id="owner"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          id="submit-btn"
          className="create-btn"
          type="submit"
          value="Create Board"
        />
      </form>
      <br></br>
    </section>
  );
};

export default NewBoardForm;
