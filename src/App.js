import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/mainComponent/Layout';
import PageNotFound from './component/mainComponent/PageNotFound';
import Body from './component/mainComponent/Body';
import TicTacToe from './component/ticTacToe/TicTacToe';
import UseMemoDemo from './component/useMemoDemo/UseMemoDemo';
import PageNotFound from './component/mainComponent/PageNotFound';
import UseRefDemo from './component/useRefDemo/UseRefDemo';
import RomanToInteger from './component/romanToInteger/RomanToInteger';
import CharacterCounter from './component/characterCounter/CharacterCounter';
import ToDoList from './component/todo-list/ToDoList';
import Flag from './component/flag/Flag';
import SearchList from './component/searchInList/SearchList';
import FoodApp from './component/foodApp/FoodApp';
import RestaurantsComponent from './component/foodApp/components/RestaurantsComponent';
import AboutUs from './component/foodApp/components/AboutUs';
import UserParent from './component/foodApp/components/UserParent';
import RestaurantPage from './component/foodApp/components/RestaurantPage';
import Cart from './component/foodApp/components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="ticTacToe" element={<TicTacToe />} />
          <Route path="useMemoDemo" element={<UseMemoDemo />} />
          <Route path="useRefDemo" element={<UseRefDemo />} />          
          <Route path="romanToInteger" element={<RomanToInteger />} />
          <Route path="charCounter" element={<CharacterCounter />} />
          <Route path="toDoList" element={<ToDoList />} />
          <Route path="showFlag" element={<Flag />} />
          <Route path="search" element={<SearchList />} />
          <Route path="foodApp" element={<FoodApp />} >
            <Route index element={<RestaurantsComponent />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="user" element={<UserParent />} />
            <Route path="restaurantMenu/:resId" element={<RestaurantPage />} />
            <Route path="cart" element={<Cart />} />
          </Route>
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
