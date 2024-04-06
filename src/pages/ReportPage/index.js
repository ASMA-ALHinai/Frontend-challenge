


import React from 'react';
import Table from '../../../src/components/shared/Table';
import Layout from '../../../src/components/shared/Breadcrumb';
import useFetchData from './useFetchData';



const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
    grow: 0,
    style: {
      width: '50px',
    },
  },
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
    grow: 2,
    style: {
      width: '50px',
    },
  },
  {
    name: 'Body',
    selector: row => row.body,
    sortable: true,
    grow: 3,
    style: {
      width: '50px',
    },
  },

];
const breadcrumbs = [
  { title: "Home", path: "/" },
  { title: "Reports", path: "/reports" },
];
const ReportPage = () => {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div  className="container mx-auto grid place-items-center">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return  <div className="overflow-x-auto">
   
 <div className="container mx-auto p-4">
 <Layout title="Reports" breadcrumbs={breadcrumbs}>
          </Layout>
  <Table columns={columns} data={data} /></div>
</div>;
};

export default ReportPage;