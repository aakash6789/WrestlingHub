import { createContext, useState , useContext} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({email: '',firstName: '',lastName: '',phoneNo:Number});
    const [uname,setUname]=useState('');

    return (
        <AuthContext.Provider value={{ user, setUser ,uname,setUname}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;