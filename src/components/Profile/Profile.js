import React from 'react'
import "../Profile/Profile.css"
const Profile = () => {
  return (
    <div>
        <div className='container-fluid bg-light'>
      <div className='container '>
        <div className='row py-3'>
            <div className='col-md-4 px-3 d-flex justify-content-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc5V4a7uDaoNcd4Ygrc1CXyh5XmCKUq0KP8GtWYLLLg&s' 
                className='rounded-circle'/></div>
            <div className='col-md-8'>
                <div className='d-flex align-items-center'><h2 className='mr-5'>Virat kholi</h2> 
                <button className='mx-4 px-3 rounded border-0 follow'>Follow</button>
                <button  className='px-3 rounded border-0 follow'>Message</button>
                <i class="fa-solid fa-ellipsis fa-2x ml-4"></i>
                </div>
            <div className='d-flex'>
             <p className='mr-5 my-3'>Post</p>
             <p className='mx-5 my-3 follow'>Followers</p>
             <p className='mx-5 my-3 follow'>Following</p>
             </div>
             <div>
                <h6 className='font-weight-bold'>virat Kholi</h6>
            </div>
            <div>
                <a className='decoration-none text-primary'href='#'>one8.com</a>
            </div>
            </div>
            

        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile
