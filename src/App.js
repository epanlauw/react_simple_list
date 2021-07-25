import { useState } from "react";

import Wrapper from "./components/Helpers/Wrapper/Wrapper";
import AddUser from "./components/Users/UserInput/AddUser";
import UsersList from "./components/Users/UserList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
