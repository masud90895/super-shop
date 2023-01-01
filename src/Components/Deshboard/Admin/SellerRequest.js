import React, { useEffect, useState } from 'react';

const SellerRequest = () => {
    const [sellerRequest, setSellerRequest] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/sellerRequest")
        .then((res) => res.json())
        .then((data) => setSellerRequest(data));
    }, []);

    console.log("sellerRequest",sellerRequest);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px]'>
            {
              sellerRequest?.length > 0 ? sellerRequest?.map(seller => <div key={seller?._id} className="max-w-md p-8 sm:flex sm:space-x-6 m-2 bg-gradient-to-r from-purple-600 to-purple-400  text-gray-100 rounded-2xl">
              <div className="flex flex-col space-y-4">
                  <div>
                      <h2 className="text-2xl font-semibold">{seller?.name}</h2>
                      <span className="text-sm dark:text-gray-400">Brand : {seller?.brand}</span>
                  </div>
                  <div className="space-y-1">
                      <span className="flex items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                              <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                          </svg>
                          <span className="dark:text-gray-400">{seller?.email}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                              <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                          </svg>
                          <span className="dark:text-gray-400">{seller?.number}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                      <svg  className="w-4 h-4" style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" fill="white"></path></svg>
                          <span className="dark:text-gray-400">{seller?.address}</span>
                      </span>
                  </div>
                  <div style={{ border : "1px solid blue"}} className="button w-full" id="button-5">
                      <div style={{backgroundColor : "blue"}} id="translate"></div>
                      <p >Approved</p>
                    </div>
              </div>
          </div>) : <div>
                <h1>No Seller Request Found</h1>
              </div> 
            }
        </div>
    );
};

export default SellerRequest;