import React, { useState } from 'react';
import Header from './components/common/Header';
import Menu from './components/common/Menu';
import { useMediaQuery } from 'react-responsive'; 
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
     
      <div className="flex h-screen bg-gray-100">
      {isDesktopOrLaptop && (
        <aside className="w-64 bg-white p-5">
          <Menu isSidebarOpen={isSidebarOpen}  />
        </aside>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}  />
        <Routes>
         
         <Route path="/" element={<HomePage />} exact />
         <Route path="/reports" element={<ReportPage />} />
         <Route path="/projects" element={<ProjectPage />} />
         

       </Routes>
      </div>
      {isTabletOrMobile && (

        <aside className="fixed inset-y-0 left-0 bg-white p-5 w-64 transform -translate-x-full">
          <Menu  isSidebarOpen={isSidebarOpen}  />
        </aside>
      )}
    </div>

    </Router>
  );
};

export default App;
