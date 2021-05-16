import React from 'react'
import '../css/Form.css'
import axios from 'axios';
import {useState} from 'react';
const url = "http://localhost:5000/submit";
const Form = () => {

    const [formdata, setFormdata]=useState({name:'', email:'', message:''});
    const [loading, setLoading]=useState(false);
    const [response, setResponse] = useState({stat:false, message:''});
    const submitform = (e)=>{
        e.preventDefault();
        setLoading(true)
        axios.post(url, formdata)
            .then((res) => {setResponse({stat:true, message:res.data.message});
                                setLoading(false);})
            .catch(err => console.log("error"))
    }

    const inputHandler = (event) => {
        setFormdata((prevState) => ({
           ...prevState,
           [event.target.id]: event.target.value
        }));
    }

    return (

       
        <div className="form-main">
            {loading?(
                <div class="loadingio-spinner-rolling-b24irj4gr3u"><div class="ldio-rhjhhimxyz">
                <div></div>
                </div></div>
            ):(
                response.stat?(
                    response.message="Success"?(<h2 style={{marginTop:'40%', marginLeft:'70%', color:'green', fontSize: '100px'}}>&#10004;</h2>
                    ):(<h1 style={{marginTop:'40%', marginLeft:'70%', color:'red'}}>&#10006;</h1>)
                ): 
                (
                   <form id="contact-form" className="form-ele" onSubmit={submitform}>
           
                   <label for="name">Name</label>
                   <input placeholder="Name" type="text" id="name" value={formdata.name} onChange={inputHandler}></input>
                   <br></br>
                   <br></br>
                   <label for="email">EMAIL</label>
                   <input id="email" placeholder="Email" value={formdata.email} onChange={inputHandler} autoComplete="off" type="text" ></input>
                   <br></br>
                   <br></br>
                   <label for="subject">Message</label>
                   <textarea id="message" name="Text1" cols="45" rows="6" value={formdata.message} onChange={inputHandler}></textarea>
                   <br></br>
                   <br></br>
                   <br></br>
                   <button form="contact-form" type="submit" value="Submit">Submit</button>
               </form>
                )
            )}
             
            
        </div>
    )
}

export default Form;
