 
  import { signOut ,  onAuthStateChanged } from 'firebase/auth';
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { auth } from './firebase';

export const Homepage = () => {
    
    let navigate = useNavigate()
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    const logout = (e) => {
        e.preventDefault();
        signOut(auth);
        navigate("/login")
      };
    return (
        <div>
              <div className="logout">
        <h2>User</h2>
        {user?.email}
        <button className="btn btn-danger" onClick={logout}>Sign Out</button>
      </div>
        </div>
    )
}
