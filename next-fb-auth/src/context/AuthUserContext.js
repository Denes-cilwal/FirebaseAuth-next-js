import { createContext, useContext} from 'react'
import useFirebaseAuth from '../lib/useFirebaseAuth';

 // create a context with default value
const authUserContext = createContext({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async () => {},
    createUserWithEmailAndPassword: async () => {},
    signOut: async () => {}
});

const  AuthUserProvider  = ({ children }) => {
    // get actual authUSer and loading variables from useFirebaseAuth
    console.log("children", "console11111")
    const auth = useFirebaseAuth();
    // pass actual auth value to Contextprovider
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export default  {AuthUserProvider}