import './App.css';
import Users from './components/Users';
import UserList from './components/UserList';

import { useState } from 'react';

function App() {

  const [currentUserId, setcurrentUserId] = useState(null)


  return (
    <div className="App">
      
      <div className='users'>
        <Users setcurrentUserId={setcurrentUserId} />
      </div>
      <div className='userList'>
        <UserList currentUserId={currentUserId} />
      </div>

    </div>
  );
}

export default App;