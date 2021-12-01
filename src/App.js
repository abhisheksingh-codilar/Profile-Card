import React,{useState}  from 'react';

import Pagination from './Pagination/Pagination';
import Profile from './ProfileCard/ProfileCard';

function App() {
  const [state, setstate] = useState(1);
 
  return (
    <div className="mainApp">
      <Profile  state={state}/>
      <Pagination setstate={setstate} state={state}/>
    </div>
  );
}

export default App;