import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const BoardCard = ({ board, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/" + board.id);
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("boards")
      .delete()
      .eq("id", board.id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      onDelete(board.id);
    }
  };
  return (
    <div className="board-card">
      <h3>{board.description}</h3>
      <p>{board.author}</p>
      <p className="last-edited">
        Created: {board.created_at.slice(0, 10).replace(/-/g, "/")}
      </p>
      <div className="buttons">
        <button className="button-23" onClick={handleEdit}>
          Edit
        </button>
        <button className="button-24" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BoardCard;
