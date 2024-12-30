import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import BoardCard from "../components/BoardCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [boards, setBoards] = useState(null);

  const handleDelete = (id) => {
    setBoards((boards) => {
      return boards.filter((bo) => bo.id !== id);
    });
  };

  useEffect(() => {
    const fetchBoards = async () => {
      const { data, error } = await supabase
        .from("boards")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        setFetchError("Could not fetch the boards");
        setBoards(null);
        console.log(error);
      }

      if (data) {
        setBoards(data);
        setFetchError(null);
      }
    };

    fetchBoards();
  }, []);
  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {boards && (
        <div className="boards">
          {boards.map((board) => (
            <BoardCard onDelete={handleDelete} board={board} key={board.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
