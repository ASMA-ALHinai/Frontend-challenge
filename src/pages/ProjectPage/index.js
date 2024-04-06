import React from 'react';
import './projectPage.css';
import Card from './../../../src/components/shared/card';
import useFetch from './../../../src/components/shared/card/APIdata';
import Layout from '../../../src/components/shared/Breadcrumb';

const ProjectPage = () => {
  const breadcrumbs = [
    { title: "Project", path: "/projects" },
    { title: "Athar", path: "/projects" },
  ];
  const { data: programs, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');
  if (loading) return <div  className="container mx-auto grid place-items-center">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto overflow-auto  ">
      <div  className="p-4 pb-0" >
      <Layout title="Projects" breadcrumbs={breadcrumbs}>
          </Layout>
      </div>
    
      <div className="flex flex-wrap justify-center">
        
        {programs.map((program) => (
          <Card key={program.id} title={program.title} description={program.url} />
        ))}
      </div>
    </div>

  );
};

export default ProjectPage;