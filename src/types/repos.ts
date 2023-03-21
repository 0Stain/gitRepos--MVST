import UserProps from "./user";

export interface RepoProps {
    id: number,
    owner: UserProps,
    name: string,
    html_url: string,
    description: string,
    language: string,
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number,
    watchers_count: number,

};

export default RepoProps;