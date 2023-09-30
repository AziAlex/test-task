import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from "../../widgets/header";


export const Layout = () => (
  <>
    <Header/>
    <Outlet/>
  </>
);
