import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ITable} from "../../shared/types/table";
import TableItem from "../../enteties/table-item";

import styles from "./styles.module.scss"

const Projects = () => {
  const [projects, setProjects] = useState<ITable[]>([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get<ITable[]>("http://localhost:3001/tables");
      setProjects(data)
    })()
  }, []);

  return (
    <div className={styles.wrap}>
      <ul>
        {projects.length ? projects.map((project) => (
          <TableItem key={project.id} {...project}/>
        )) : null}
        <li><button>Создать доску</button></li>
      </ul>
    </div>
  );
};

export default Projects;