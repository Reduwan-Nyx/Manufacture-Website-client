import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch }) => {
  const { name, products, img, email } = product;

  const handleDelete = email =>{
      fetch(`http://localhost:5000/purchase/${email}`,{
          method:'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }

      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.deletedCount){
              toast.success(`Product ${product.name} is deleted`)
              refetch()
          }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img
              src={img}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{products}</td>
      <td>
        <button onClick={()=> handleDelete(email)} class="btn btn-outline btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
