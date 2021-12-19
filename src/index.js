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
        {/* <Routes>
          <Route path='/' element={
            <RequireAuth>
              <App />
            </RequireAuth>
          } >
            <Route path='/' element={<PublicPage />}></Route>
            <Route path='protected' element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }></Route>
            <Route path='expenses' element={<Expenses />} />
            <Route path='invoices' element={<Invoices />} >
              <Route index element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              } />
              <Route path=':invoiceId' element={<Invoice />} />
            </Route>
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            ></Route>
          </Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard2' element={<Dashboard2 />}></Route>
        </Routes> */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode >,
  document.getElementById('root')
);