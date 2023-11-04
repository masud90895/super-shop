import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../InputField/InputField.tsx';
import ReactQuills from '../../ReactQuill/ReactQuill.tsx';
import ReactMultiSelect from '../../ReactSelector/ReactSelector.tsx';
import { AuthContext } from '../../AuthProvider/AuthProvider.js';

const collectionsData = [
  { value: '1', label: 'todayDeals' },
  { value: '2', label: 'summer' },
  { value: '3', label: 'electronic' },
  { value: '4', label: 'women' },
  { value: '5', label: 'ladiesBag' },
  { value: '6', label: 'globalProducts' },
  { value: '7', label: 'sharee' },
  { value: '8', label: 'smartphone' },





]



const AddProducts = () => {

  // get user
  const { user } = useContext(AuthContext);

  // slit user.email with @
  const name = user?.email?.split('@')[0];


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm()


  const watchData = watch();
  // console.log(watchData);

  const onSubmit = (data) => {
    if (!data?.collections) {
      alert('Please Select Category')
      return;
    }

    data.collections = data?.collections?.name;
    data.question = [];
    data.sellerName = user?.displayName ?? name;
    data.sellerEmail = user?.email;

    // upload image

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=25b08f5eaf567ebb996f971a9098c761`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (image) => {
        await (data.image = image?.data?.url);

        console.log(data);


      }
      );


  }



  return (<div className="px-2 ">
    <div className="flex flex-no-wrap items-start">
      <div className="w-full ">

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded shadow mt-7 py-4 px-2">
          {/*  */}
          <h3 className='text-[18px] font-serif mb-[8px]'>Add New Products</h3>

          {/* product image  */}



          <div className="mb-4">
            <label className="text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize">
              Product Image


              <span className='text-red-500 ml-1'>*</span>
            </label>

            {
              watchData?.image?.length > 0 ?

                // showed image and remove button
                <div className='flex items-center'>
                  <img src={URL.createObjectURL(watchData?.image[0])} alt="" className='w-[200px] h-[200px] object-cover my-[8px]' />
                  <button type='button' className='ml-4 text-red-500' onClick={() => setValue('image', '')}>Remove</button>
                </div>

                // <img src={URL.createObjectURL(watchData?.image[0])} alt="" className='w-[100px] h-[100px] object-cover' /> 

                :


                <div id="image-preview" class="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                  <input id="upload" name="image" type="file" class="hidden" accept="image/*"  {...register("image", { required: true })} />
                  <label for="upload" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                    <p class="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b class="text-gray-600">2mb</b></p>
                    <p class="font-normal text-sm text-gray-400 md:px-6">and should be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                    <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                  </label>
                </div>
            }









            {errors.image && (
              <span className="text-red-500">Image  is required</span>
            )}
          </div>







          <InputField
            label='Product Name'
            name='name'
            placeholder='Enter Product Name'
            register={register}
            required
            type='text'
            errors={errors}
          />

          {/* collections  */}



          <div className="mb-4">
            <label className="text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize">
              Category
              {/* required */}
              <span className='text-red-500 ml-1'>*</span>
            </label>
            <ReactMultiSelect
              isMulti={false}
              name='collections'
              placeholder='Select Category'
              setValue={setValue}
              options={collectionsData}
            />
          </div>




          <InputField
            label='Product Price'
            name='price'
            placeholder='Enter Product Price'
            register={register}
            required
            type='number'
            errors={errors}
          />

          {/* discount */}
          <InputField
            label='Product Discount'
            name='discount'
            placeholder='Enter Product Discount'
            register={register}
            required
            type='number'
            errors={errors}
          />

          {/* store name  */}
          <InputField
            label='Store Name'
            name='storeName'
            placeholder='Enter Store Name'
            register={register}
            required
            type='text'
            errors={errors}
          />

          {/* hightlight */}
          <ReactQuills
            label='Product Highlight'
            name='hightlight'
            placeholder='Product Highlight'
            setValue={setValue}
            required
          />

          {/* description */}
          <ReactQuills
            label='Product Description'
            name='description'
            placeholder='Product Description'
            setValue={setValue}
            required
          />










          {/* <input type="submit" value="Submit" className='' /> */}

          <button type="submit" className="button w-[300px] mt-[20px]" id="button-5">
            <div id="translate"></div>
            <p>Submit</p>
          </button>




        </form >


      </div>
    </div>
  </div>

  );
};

export default AddProducts;