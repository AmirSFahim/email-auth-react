import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';

import app from "../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [loginError, setLoginnError] =useState('')
    const [succsess, setSucess ] = useState('')
    const [showPass, setShowPass] =useState(false)

    const handleFrom = e =>{
        e.preventDefault()
        setLoginnError('')
        setSucess('')
        
        const password = e.target.password.value
        const email = e.target.email.value
        const acceptd = e.target.terms.checked
        const auth = getAuth(app)
        console.log(email ,'email' ,password, "password")

        if (password.length < 6) {
            setLoginnError('password shoud have six or more leters')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setLoginnError('uppercase is missing')
            return
        }
        else if(!acceptd){
            setLoginnError('agreed to our terms ')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSucess('added')
        })
        .catch( error=>{
            console.log(error)
            setLoginnError(error.message)
        })
    }
    return (
        <div className="border">
            <div className="  mx-auto md:w-4/12">
            <h1 className="text-3xl pb-4"> register here</h1>
            
            <form onSubmit={handleFrom}>
                <input className="mb-4 w-full px-2 py-4" placeholder="email" name='email' type="email" id="" /><br />
                <div className="relative">
                <input className="mb-4 w-full px-2 py-4" 
                placeholder="password"
                name='password' 
                type=  {showPass ? "text": "password" }
                id="" /> 
                <span className="absolute top-1/4 right-2" onClick={()=>setShowPass(!showPass)}>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>

                </div>
                <br />

                <div className="mb-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">accepts <a href="">terms and conditons</a></label>
                </div>
                <input className="mb-4 w-full btn btn-primary" type="submit" value="register" />
            </form>
            {
                loginError && <p className="text-red-500">{loginError}</p>
            }

            {
                succsess && <p className="text-green-400">{succsess}</p>
            }

            </div>
            

        </div>
    );
};

export default Register;