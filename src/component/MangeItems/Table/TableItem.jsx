import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const TableItem = (props) => {
  ///deleting an item

  const [products, setProducts] = useState([]);
  const { url } = props;
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setProducts(data);
    };
    getProducts(url);
  }, []);

  //delete item
  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://sleepy-crag-16124.herokuapp.com/products/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.acknowledged) {
          const newProducts = products.filter((product) => product._id !== id);
          setProducts(newProducts);
          toast("Item deleted");
        }
      });
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price:</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  className="bg-danger"
                  onClick={() => {
                    deleteItem(product._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default TableItem;
