
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, breadcrumbs }) => {
  return (
    <nav className="bg-grey-light rounded font-sans w-full ">
      <ol className="list-reset flex text-grey-dark text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            <Link to={crumb.path} className="ml-1 text-blue-600 hover:text-blue-700">
              {crumb.title}
            </Link>
            {index < breadcrumbs.length - 1 ? ' / ' : ' '}
          </li>
        ))}
        <li className="text-gray-500 ">{title}</li>
      </ol>
    </nav>
  );
};



const PageTitle = ({ title }) => {
  return <h1 className="text-xl md:text-xl font-bold text-gray-700">{title}</h1>;
};





const Layout = ({ children, title, breadcrumbs }) => {
    return (
      <div>
        <div className="mb-2">
        <PageTitle title={title} />
      </div>
      <div className="mb-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      </div>
    );
  };
  
  export default Layout;