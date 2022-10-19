import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './AddImage.css';


function AddImage(){
    const [data, setData] = useState();
    console.log(data);
    return (

        <div className='main'>
            <div className='uploadImage w-75 mx-auto shadow p-5'>
                <label htmlFor="imgs" className="text-center mb-4"> Add Image </label>
            </div>
            <input id='imgs' type="file"  onChange={(e)=>setData(e.target.files)}/>
        </div>
    );
}

export default AddImage;