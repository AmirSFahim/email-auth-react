import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from "../firebase/firebase.config";
import { useState } from "react";


const RegisterHero = () => {
    const [loginError, setLoginnError] = useState('')
    const [succsess, setSucess] = useState('')

    const handleFrom = e => {
        e.preventDefault()
        setLoginnError('')

        //
        const password = e.target.password.value
        const email = e.target.email.value
        const auth = getAuth(app)
        console.log(email, 'email', password, "password")
        if (password.length < 6) {
            setLoginnError('password shoud have six or more leters')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSucess('added')
            })
            .catch(error => {
                console.log(error)
                setLoginnError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFrom} className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        {
                            loginError && <p className="text-red-500"> {loginError}</p>
                        }
                        {
                            succsess && <p>{succsess}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterHero;