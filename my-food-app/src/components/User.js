import UserContext from "../utils/UserContext";
import { useContext } from "react";

const User = () =>{
    const{loggedInUser} = useContext(UserContext)

   

    return <div className="user-card">
        <h1>{loggedInUser}</h1>
        
        <h3>Location : Yavatmal</h3>
        <h4>Contact: bhavika@21</h4>
    </div>
}
export default User;