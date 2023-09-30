import React from 'react';
import './styles/App.scss';
import {Route, Routes} from "react-router-dom";
import {Layout} from "../features/layout";
import Projects from "../pages/projects";
import NotFound from "../pages/not-found";
import Table from "../pages/table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Projects/>}/>
          <Route path="/project/:id" element={<Table/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
