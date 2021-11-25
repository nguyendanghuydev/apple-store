import UserCard from "../components/userCard";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
function User() {
  const dispatch = useDispatch();
  const onSubmit = async (obj) => {
    await dispatch(updateUser(obj));
  };

  return (
    <div>
      <UserCard onSubmit={onSubmit} />
    </div>
  );
}

export default User;
