import React from 'react';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../../Redux/api/cartApi';
import toast from 'react-hot-toast';

const AllProduct = () => {

  const { data } = useGetAllProductQuery();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteBuyer = (id) => {
    toast.error('We Disabled this features for security reasons')
    deleteProduct(id).unwrap().then(() => {
      toast.success('Product Deleted Successfully')
    }).catch((err) => {
      toast.error(err.message)
    })
  }


  return (
    <div className="overflow-x-auto md:mt-[20px]">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Store Name</th>
            <th>Category</th>
            {/* <th>Description</th> */}

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {data?.length > 0 ? (
            data?.map((sl, i) => (
              <tr key={sl._id} className="hover">
                <th>{i + 1}</th>
                <td>{sl?.name?.length > 25 ? sl?.name?.slice(0, 25) + '...' : sl?.name}</td>
                <td>{
                  sl?.mainPrice?.toString()?.split('.')[1]?.length > 2 ? sl?.mainPrice?.toString()?.split('.')[0] + '.' + sl?.mainPrice?.toString()?.split('.')[1]?.slice(0, 2) : sl?.mainPrice


                }</td>
                <td>{sl?.storeName}</td>
                <td>{sl?.collections}</td>
                {/* <td dangerouslySetInnerHTML={
                  {
                    __html: sl?.description?.length > 50 ? sl?.description?.slice(0, 50) + '...' : sl?.description
                  }
                } /> */}
                {
                  isLoading ? <td>Loading...</td> : <td>
                    <button
                      onClick={() => handleDeleteBuyer(sl._id)}
                      className="bg-red-600  text-white p-3 rounded-xl font-bold hover:bg-white border hover:border-red-600 hover:text-black"
                    >
                      Delete
                    </button>
                  </td>
                }

              </tr>
            ))
          ) : (
            <tr>
              <th></th>
              <td></td>
              <td>No product Found</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;