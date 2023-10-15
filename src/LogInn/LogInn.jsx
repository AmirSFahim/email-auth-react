import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";



const LogInn = () => {
    const [loginError, setLoginnError] = useState('')
    const [succsess, setSucess] = useState('')
    const handleLogin = e => {
        e.preventDefault()
        setLoginnError('')
        setSucess('')
        const password = e.target.password.value
        const email = e.target.email.value
        const auth = getAuth(app)

        

        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSucess('log in successfully')
            })
            .catch(error => setLoginnError(error.message))


    }
    const handleForgetpass = () =>{
        console.log('password forget')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetpass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        loginError && <p className="text-red-500">{loginError}</p>
                    }

                    {
                        succsess && <p className="text-green-400">{succsess}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default LogInn;