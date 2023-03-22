import { UserProps } from "../types/user";
import {MdLocationPin} from 'react-icons/md';
import { Link } from "react-router-dom";
import classes from './User.module.css';

const User = ({ 
    login,
    avatar_url,
    location,
    followers,
    following,
    public_repos,
    html_url,
    repos_url,
 }: UserProps) => {

  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>

        {location && (
            <p className={location}>
            <MdLocationPin/>
            <span>{location}</span>
            </p>
        )}
            <div className={classes.stats}>
                <div>
                    <p>Followers :</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Following :</p>
                    <p className={classes.number}>{following}</p>
                </div>
                <div>
                    <p>Repos :</p>
                    <p className={classes.number}>{public_repos}</p>
                </div>
      
            </div>  
            <Link to={html_url}>View Profile</Link>
            
    </div>
  )
}

export default User;
