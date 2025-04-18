import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/MainComponent/Layout';
import PageNotFound from './component/MainComponent/PageNotFound';
import Body from './component/MainComponent/Body';
import TicTacToe from './component/TicTacToe/TicTacToe';
import UseMemoDemo from './component/UseMemoDemo/UseMemoDemo';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="ticTacToe" element={<TicTacToe />} />
          <Route path="useMemoDemo" element={<UseMemoDemo />} />
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
