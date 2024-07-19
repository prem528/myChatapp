import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const {loading ,login} = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password)
	}
    	return (
    		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    			<div className='w-full p-5 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
    				<h1 className='text-3xl font-bold text-center text-gray-300'>
    					Login
    					<span className='text-blue-500'> ChatBox</span>
    				</h1>
    
    				<form onSubmit={handleSubmit}>
    					<div>
    						<label className='label p-2'>
    							<span className='text-base label-text font-bold text-white'>Username</span>
    						</label>
    						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)} />
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-base label-text font-bold text-white'>Password</span>
    						</label>
    						<input
    							type='password'
    							placeholder='Enter Password'
    							className='w-full input input-bordered h-10'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
    						/>
    					</div>
    					<Link  to="/signup" className='text-sm text-white hover:underline font-bold hover:text-blue-600 mt-2 inline-block'>
    						{"Don't"} have an account?
    					</Link>
    
    					<div>
    						<button className='btn btn-block font-bold btn-sm mt-2'
							 disabled={loading}
			                >
								{loading ? <span className="loading load-spinner"></span> : "Login"}

							</button>
    					</div>
    				</form>
    			</div>
    		</div>
    	);
    };
    export default Login;