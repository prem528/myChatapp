import Conversations from './ConversationList';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4  flex-col'>
        <SearchInput/>
        <div className='divider px-3 '></div>
          <Conversations/>
        <LogoutButton />

    </div>
  )
};

export default Sidebar
