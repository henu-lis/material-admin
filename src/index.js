import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth, AuthProvider } from './Auth';

import LoginPage from './views/LoginPage';
import Dashboard from './SimpleAdmin/Dashboard';
import Dashboard2 from './SimpleAdmin/Dashboard2';
import Orders from './SimpleAdmin/Order';
import Chart from './SimpleAdmin/Chart';
import Deposits from './SimpleAdmin/Deposits';

import Introduction from './views/Introduction';
import UxDesign from './views/UxDesign';
import UseStylesTest from './views/UseStylesTest';
import ButtonTest from './views/ButtonTest';
import TypographyTest from './views/TypographyTest';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route path='/order' element={<Orders />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='/deposit' element={<Deposits />} />

            <Route path='/introduction' element={<Introduction />} />
            <Route path='/uxdesign' element={<UxDesign />} />
            <Route path='/usestyles' element={<UseStylesTest />} />
            <Route path='/button' element={<ButtonTest />} />
            <Route path='/typography' element={<TypographyTest />} />
            <Route index element={
              <main style={{ padding: '1rem' }}>
                Welcome to mian page
              </main>
            } />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard2' element={<Dashboard2 />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode >,
  document.getElementById('root')
);