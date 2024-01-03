
import { useSelector } from "react-redux";

import User from "./user";
import "./users.scss";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  console.log("users",users)

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;