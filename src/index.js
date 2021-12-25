import React, { Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider } from './Auth';
import AppMain from './AppMain';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading..........</div>}>
    <AuthProvider>
      <BrowserRouter>
        <AppMain />
        {/* <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route path='/order' element={<Orders />} />
            <Route index element={
              <main style={{ padding: '1rem' }}>
                Welcome to mian page
              </main>
            } />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          ></Route>
        </Routes> */}
      </BrowserRouter>
      </AuthProvider>
      </Suspense>
  </React.StrictMode >,
  document.getElementById('root')
);