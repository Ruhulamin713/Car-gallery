import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import TableItem from "../MangeItems/Table/TableItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  // const url = `https://sleepy-crag-16124.herokuapp.com/product?email=${email}`;
  const url = `https://sleepy-crag-16124.herokuapp.com/product?email=${email}`;
  return (
    <div className="mt-5 pt-4">
      <h3>My Items</h3>
      <TableItem url={url} />
    </div>
  );
};

export default MyItems;
