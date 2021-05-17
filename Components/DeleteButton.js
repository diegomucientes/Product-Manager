import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { productId, successCallback } = props;
  const deleteProduct = (e) => {
    axios
      .delete('http://localhost:8000/api/product/' + productId)
      .then(res => {
        console.log(productId);
        successCallback();
      })
    //   .catch((err) => err);
  };
  return (
  <button onClick={deleteProduct}>Delete Product</button>
  )

};

export default DeleteButton;
