import React, { useState } from "react";

const Contact = () => {
    const [data , setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const inputEvent = (event) =>{
        const {name , value } = event.target;

        setData((prevalue) => {
            return {
                ...prevalue,
                [name] : value,
            };
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert(
            `My name is ${data.fullname}. My Mobile number is ${data.phone}. My email is ${data.email}. I want to Convey Message ${data.msg} `
        );
    };
    return (
        

        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={onSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent}  placeholder="Enter Your Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile Number"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                        </div>
                        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-primary mb-3">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;