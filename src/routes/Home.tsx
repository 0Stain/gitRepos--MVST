import { UserProps } from '../types/user';

import Search from '../Components/Search';
import User from '../Components/User';
import Error from '../Components/Error';

import { useState } from 'react';


const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async(userName: string) => {
        setError(false);
        setUser(null);


        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if(res.status === 404)  {
            setError(true);
            setUser(null);
            return;
        } 

        const {avatar_url, login, location, followers, following, public_repos, html_url, repos_url} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
            public_repos,
            html_url,
            repos_url,
        }
        setUser(userData);
    }
  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user}/> }
        {error && <Error/>}

    </div>
  )
}

export default Home
