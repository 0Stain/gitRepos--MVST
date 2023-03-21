import {RepoProps} from '../types/repos';
import { Link } from "react-router-dom";
import classes from './Repos.module.css';

const Repos = ({
    id,
    name,
    html_url,
    description,
    language,
    stargazers_count,
    forks_count,
    open_issues_count,
    watchers_count,
}: RepoProps) => {
  return (
    <div className={classes.repo}>
        <h2 className={classes.repo__title}>{name}</h2>
        <p className={classes.repo__description}>{description}</p>

        <div>
            <p>Language: {language}</p>
            <p>Stars: {stargazers_count}</p>
            <p>Forks: {forks_count}</p></div>
            <p>Open Issues: {open_issues_count}</p>
            <p>Watchers: {watchers_count}</p>
            <div className={classes.repo__link}>
        <Link to={html_url}>View Repository</Link>
            </div>
    </div>
  )
}

export default Repos;
