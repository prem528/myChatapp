import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className='flex h-screen w-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home;
