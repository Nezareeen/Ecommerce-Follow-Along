import React, { useState } from 'react'

const AddProducts = () => {
    const [noOfImages,setNoOfImages] = useState(1);
  return (
    <div>
        <form action="">
    <input type="text" name={"title"} placeholder='Enter title ....' />
    <input type="text" name={"description"} placeholder='Enter product description ....' />
    <select name="" id="" onSelect={(event)=>{
        console.log(event.target);
        setNoOfImages(parseInt(event.target.value));
    }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
    <label htmlFor="">Add Images</label>
    {
        noOfImages.map((ele)=>{
            <input type="file" accept='image/*'/>
        })
    }
    </form>
    </div>
  )
}

export default AddProducts