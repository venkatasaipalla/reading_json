import Axios from "axios";
import { useEffect, useState } from "react";
export function Detail(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                setData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);
    
    const ListNames = () => {
        return(
                <div class="bg-dark">
                    <table class=" table caption-top table-dark table-borderless" style={{textAlign:"center",margin:"0% 2.5%",borderRadius:"50px",maxWidth:"95%",borderRight:"2px solid white",borderLeft:"2px solid white"}}>
                        <caption class="h1 bg-dark text-light" style={{paddingBottom:"40px", marginBottom:"0px",textAlign:"center",fontWeight:"bolder"}}>Dummy Data</caption>
                        <thead style={{textAlign:"center",border:"2px solid white"}}>
                            <tr >
                            <th>Sno</th>
                            <th>profile pic</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Domain</th>
                            <th>Ip</th>
                            <th>University</th>
                        </tr>
                        </thead>
                        
                        {data?.users?.map(val=>(
                            <tbody style={{textAlign:"left"}}>
                            <tr>
                                <td>{val.id}</td>
                                <td><img style={{width:"50px",height:"50px"}} src={val.image} alt="pic"></img></td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.username}</td>
                                <td>{val.domain}</td>
                                <td>{val.ip}</td>
                                <td>{val.university}</td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                
        )
    }
    return(
        <div>
            {ListNames()}
        </div>
    )
    
}