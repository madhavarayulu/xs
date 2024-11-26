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
import Transformations from './components/pages/product/transformations/Transformations';
import DataDemocratization from './components/pages/solutions/data-democratization/DataDemocratization';
import InfrastructureModernization from './components/pages/solutions/infrastructure-modernization/InfrastructureModernization';
import Overview from './components/pages/pricing/overview/Overview';
import Contact from './components/pages/contact/Contact';
import Connectors from './components/pages/connectors/Connectors';
import Careers from './components/pages/careers/Careers';
import JobDetail from './components/pages/careers/jobs/job-detail/JobDetail';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/data-movement" element={<DataMovement />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/data-democratization" element={<DataDemocratization />} />
        <Route
          path="/infrastructure-modernization"
          element={<InfrastructureModernization />}
        />
        <Route path="/pricing" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connectors" element={<Connectors />} />
        <Route path="/careers" element={<Careers />} />
        <Route
          path="/jobs/:jobTitle/location/:locationName"
          element={<JobDetail />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
