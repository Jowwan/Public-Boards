import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !author) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("boards")
      .insert([{ description, author }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Error inserting the Board");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };
  return (
    <div className="page create">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Description:</label>
        <input
          type="text"
          id="title"
          maxLength={75}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="title">Author:</label>
        <input
          type="text"
          maxLength={10}
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="button-74">Create Public Board</button>
        <p>{formError}</p>
      </form>
    </div>
  );
};

export default Create;
