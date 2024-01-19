import react from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./mess.css"
const Message=()=>
{

    const [datas,setDatas]=useState([]);
    //app.get('/api/datas')

    useEffect(()=>{
        getDatas().then(setDatas);
    },[]);

    async function getDatas(){
        const url="https://contact-backend-xg1j.onrender.com/backend/datas";
        const response= await fetch(url);
        return await response.json();
        
    }

    var count=1;
    return(
        <>
        <h1 className="thank">Thank You...</h1>
        <h3 className="thank">We  will contact you soon...</h3>
        <table>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Mob</td>
                        <td>Alt Mob</td>
                        <td>Details</td>
                    </tr>
                </table>
        <div className="full">{datas.length>0 && datas.map(data=>(
            
            <div className="f1">
                <table className="tab">
                    <tr>
                        <td>{count++}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.mob}</td>
                        <td>{data.amob}</td>
                        <td>{data.details}</td>
                    </tr>
                </table>
            </div>
        ))}
        </div>
        <center><Link to={"/"} ><p className="home">Go to Homepage</p></Link></center>
        </>
    )
}
export default Message;