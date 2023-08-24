import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const{signIn,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
               
            });
            

        })
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login </h1>
                        
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New in this website? <Link to="/signup" className="text-blue-300 font-bold ">Create an account</Link> </small></p>
                        <button onClick={handleGoogleSignIn} className='bg-red-300 p-2 text-white rounded'>Google</button>
                        
                    </div>
                </div>
            </div>
    );
};

export default Login;