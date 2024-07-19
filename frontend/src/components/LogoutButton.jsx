import React from 'react'
import  {BiLogOut} from 'react-icons/bi';
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
			{!loading ? (
				<button className="flex items-center space-x-2 fixed bottom-0 left-0 m-4 bg-red-500
         text-white py-2 px-4 rounded" onClick={logout} >
					<BiLogOut className='w-9 h-6 text-white cursor-pointer' onClick={logout} /> 
					Logout
					</button>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
  )
}

export default LogoutButton
