import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUsers);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUsers();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton className="h-20 w-full" times={6} />;
  } else if (loadingUsersError) {
    content = <div>Error Fetching Data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserError && "Error Creating User..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
