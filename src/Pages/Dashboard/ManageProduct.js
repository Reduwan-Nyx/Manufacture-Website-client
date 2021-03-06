import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data: products, isLoading, refetch} = useQuery('purchase', () => fetch('http://localhost:5000/purchase',{
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Products: {products.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
    <tr>
        <th>1</th>
        <td>Avatar</td>
        <td>Name</td>
        <td>Product</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
     {
         products.map((product, index) => <ProductRow
         key={product._id}
         product={product}
        index={index}
        refetch={refetch}
         ></ProductRow>)
     }
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProduct;