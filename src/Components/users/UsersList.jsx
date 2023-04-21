import { useNavigate } from "react-router-dom";

function UsersList() {
  const navigate = useNavigate();
  return (
    <div>
      UsersList
      <button onClick={() => navigate("/")}>Back to home page</button>
    </div>
  );
}

export default UsersList;
