import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import DataMovement from './components/pages/product/data-movement/DataMovement';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/data-movement" element={<DataMovement />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
