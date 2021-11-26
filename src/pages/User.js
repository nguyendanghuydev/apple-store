import UserCard from "../components/userCard";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";

import Helmet from "../components/Helmet";

function User() {
  const dispatch = useDispatch();
  const onSubmit = async (obj) => {
    await dispatch(updateUser(obj));
  };

  return (
    <Helmet title="Tài Khoản">
      <UserCard onSubmit={onSubmit} />
    </Helmet>
  );
}

export default User;
