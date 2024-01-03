

import "./users.scss";
import LeftSidebar from "../components/leftSidebar";
import UsersList from "./userList";

const Users = ({ slideIn, handleSlideIn }) => {

    
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;