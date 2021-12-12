import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth, AuthProvider } from './Auth';

import App from './App';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import Invoices from './routes/invoices';
import PublicPage from './views/PublicPage';
import LoginPage from './views/LoginPage';
import ProtectedPage from './views/ProtectedPage';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <App/>
            </RequireAuth>
          } >
            <Route path='/' element={<PublicPage />}></Route>
            {/* <Route path='login' element={<LoginPage />}></Route> */}
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);