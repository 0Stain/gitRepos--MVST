import { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;

};



const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('');
  return (
    <div>
      <h2>Search by username :</h2>
      <div>
        <input 
         type="text"
         placeholder="Enter username" 
         onChange={(e) => setUserName(e.target.value) }
         />
        <button onClick={() => loadUser(userName)}>
            <BsSearch/>
        </button>
      </div>
    </div>
  )
}

export default Search
