import React from 'react';
import "./Navbae.css"

const ButtomContactButton = () => {
    return (
        <aside
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-lg  px-5 py-3"
>
<div className="wrap">
  <div id='button' className="button text-center">
    <a href="https://m.me/masud90895" target="_blank" rel="noopener noreferrer"><img className='md:w-20 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="" /></a>
    </div>
</div>
  
</aside>
    );
};

export default ButtomContactButton;