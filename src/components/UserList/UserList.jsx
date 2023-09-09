import { userLists } from "./userLists";

const UserList = () => {
  return (
    <div>
      {userLists.map((userList) => (
        <div key={userList.id}>
          {userList.id} {userList.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
