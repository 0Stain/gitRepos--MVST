import React, { useState } from "react";
import { Input, List } from "antd";
import classes from "./SearchRepository.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BsEye } from "react-icons/bs";

type SearchRepositoryProps = {
    username: string;
    repositories: Array<{ name: string; html_url: string; description: string;stargazers_count: number;language: string; watchers_count: number}>;
  };

const SearchRepository = ({ username, repositories }: SearchRepositoryProps) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Input placeholder="Search repositories" onChange={handleQueryChange} />
      <List
        bordered
        dataSource={filteredRepositories}
        renderItem={(item) => (
          <List.Item>
            <div className={classes.search}>
            <a href={item.html_url}>{item.name}</a>
            <p>{item.description}</p>
            <div className={classes.stats}>
            <p className={classes.txt}>{item.language}  </p>
            <p className={classes.number}>{item.stargazers_count} <FontAwesomeIcon icon={faStar} /></p>
            <p className={classes.number}>{item.watchers_count} <FontAwesomeIcon icon={"face-monocle"} /></p>

            </div>
            </div>
            
          </List.Item>
        )}
      />
    </>
  );
};

export default SearchRepository;
