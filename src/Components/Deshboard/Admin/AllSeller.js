import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AllSeller = () => {
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allSeller")
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);
  const handleDeleteSeller =()=>{
    toast.error("We Disabled this features for security reasons")

  }
  return (
    <div className="overflow-x-auto md:mt-[50px]">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {seller.length > 0 ? (
            seller.map((sl,i) => (
              <tr key={sl._id} className="hover">
                <th>{i+1}</th>
                <td>{sl.name}</td>
                <td>{sl.role}</td>
                <td>{sl.email}</td>
                <td><button onClick={handleDeleteSeller} className="bg-red-600  text-white p-3 rounded-xl font-bold hover:bg-white hover:border hover:border-red-600 hover:text-black">Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <th></th>
              <td></td>
              <td>No Seller Found</td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
