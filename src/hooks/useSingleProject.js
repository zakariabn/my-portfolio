import { useEffect, useState } from 'react';

const useSingleProject = (id) => {

  const [project, setProject] = useState({});
  const [projectLoading, setProjectLoading] = useState(true);
  const [projectError, setProjectError] = useState(null);

  useEffect(() => {
    const url = "/project-data.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjectLoading(false);
        const projectData = data?.find(d => d._id === id);
        if (projectData) {
          setProject(projectData);
        }else setProjectError(projectData);
      })
      .catch (error => setProjectError(error));
  }, [id]);

  return [project, projectLoading, projectError]
};

export default useSingleProject;