import { UserProps } from '../types/user';
import {RepoProps} from '../types/repos';
 
import Search from '../Components/Search';
import SearchRepository from '../Components/SearchRepository';

import User from '../Components/User';

import Error from '../Components/Error';

import { useState } from 'react';



const Home = () => {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [repositories, setRepositories] = useState<RepoProps[]>([]);
    const [error, setError] = useState(false);


  const handleUserSearch = (query: string) => {
    fetch(`https://api.github.com/users/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((data) => setRepositories(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Search onSearch={handleUserSearch} />
      
      {user && <User {...user}/> }
      {error && <Error/>}
      <SearchRepository username={user.login} repositories={repositories} />
    </>
  );
};

export default Home;