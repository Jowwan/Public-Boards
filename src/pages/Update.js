import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !author) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("boards")
      .update({ description, author })
      .eq("id", id)
      .select();

    if (error) {
      setFormError("Failed to update the Public Board");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchBoards = async () => {
      const { data, error } = await supabase
        .from("boards")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setDescription(data.description);
        setAuthor(data.author);
      }
    };

    fetchBoards();
  }, []);

  return (
    <div className="page update">
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
        <button className="button-74">Update Public Board</button>
        <p>{formError}</p>
      </form>
    </div>
  );
};

export default Update;
