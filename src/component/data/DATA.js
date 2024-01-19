import react from "react";
import { useState } from "react";
import "./DATA.css"
import { Link } from "react-router-dom";
const Data=()=>
{

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [mob,setMob]=useState('');
    const [amob,setAmob]=useState('');
    const [details,setDetails]=useState('');


    function handleSubmit(ev){
        ev.preventDefault();
        const url= "https://contact-backend-xg1j.onrender.com/backend/data";
        //console.log(url);
        fetch(url,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({name,age,mob,amob,details})
        }).then(response=>{
            response.json().then(json=>{
                console.log('result',json);
            });
        });
        window.open("sub","_self");
    }

    return(
        <>
            <form onSubmit={handleSubmit} >  
                <h1 className="Head1">Contact Form</h1>
                <h2 className="Head2">Fill the below details to get Appointment</h2>
                <p className="p1">Name : <input type="text" className="inp1" name="name" placeholder="Enter Your Name" value={name} onChange={ev =>setName(ev.target.value)} /></p>
                <p className="p2" >Age : <input type="number" className="inp2" name="age"  placeholder="Enter Your Age" value={age} onChange={ev=> setAge(ev.target.value)} /></p>
                <p className="p3">Mob : <input type="number" className="inp3" name="phone" placeholder="Enter Your Phone Number" value={mob} onChange={ev=> setMob(ev.target.value)} /></p>
                <p className="p4" >Alt Mob : <input type="number" className="inp4" name="altphone" placeholder="Enter Your Alt Phone Number" value={amob} onChange={ev=> setAmob(ev.target.value)} /></p>
                <p className="p5">Tell More About Yourself : <textarea name="details" placeholder="Tell More About Self" className="ta" required value={details} onChange={ev=>setDetails(ev.target.value)} ></textarea></p>
                <center>
                    <button type="submit"    className="btn btn-outline-primary"   >Submit</button>
                    <br/>
                    <br/>
                    <Link to="sub"><button type="click"    className="btn btn-outline-danger"   >Waiting List</button></Link>
                </center>
            </form>
        </>
    )
}
export default Data


function onSubmit()
{
    alert("Details Submitted.");
}