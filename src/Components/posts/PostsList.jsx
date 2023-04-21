import { useNavigate } from "react-router-dom";

function PostsList() {
  const navigate = useNavigate();
  return (
    <div>
      PostsList
      <button onClick={() => navigate("/")}>Back to home page</button>
    </div>
  );
}

export default PostsList;
