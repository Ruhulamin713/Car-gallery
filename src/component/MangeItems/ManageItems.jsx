import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TableItem from "./Table/TableItem";

const ManageItems = () => {
  const navigate = useNavigate();

  const url = "https://sleepy-crag-16124.herokuapp.com/products";

  return (
    <div className="mt-5 pt-4">
      <div>
        <h2>Manage Inventory</h2>
        <Button
          className="bg-danger opacity-75 mb-3 w-25"
          onClick={() => navigate("/additem")}
        >
          Add Item
        </Button>
      </div>
      <TableItem url={url} />
    </div>
  );
};

export default ManageItems;
