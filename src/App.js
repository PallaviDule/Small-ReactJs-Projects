import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/mainComponent/Layout';
import PageNotFound from './component/mainComponent/PageNotFound';
import Body from './component/mainComponent/Body';
import TicTacToe from './component/TicTacToe/TicTacToe';
import UseMemoDemo from './component/UseMemoDemo/UseMemoDemo';
import PageNotFound from './component/mainComponent/PageNotFound';
import './index.css';
import UseRefDemo from './component/useRefDemo/UseRefDemo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="ticTacToe" element={<TicTacToe />} />
          <Route path="useMemoDemo" element={<UseMemoDemo />} />
          <Route path="useRefDemo" element={<UseRefDemo />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

{/*
const appProvider = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/ticTacToe',
        element: <TicTacToe />
      }
    ],
    errorElement: <PageNotFound />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appProvider} />
    </div>
  )
}
*/}

// 


export default App;
