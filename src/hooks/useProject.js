import { useEffect, useState } from 'react';

const useProject = () => {

  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(true);
  const [projectError, setProjectError] = useState(null);

  useEffect(() => {
    const url = "project-data.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjectLoading(false);
        setProjects(data)
      })
      .catch (error => setProjectError(error));
  }, []);

  return [projects, projectLoading, projectError]
};

export default useProject;