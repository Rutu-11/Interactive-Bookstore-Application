import React from 'react'
import Home from '../Pages/Home';
import { Layout } from '../App';
import {Routes, Route} from "react-router-dom";
import BookListing from '../Pages/BookListing';
import LoginPage from '../components/LoginPage';
import Favourites from '../Pages/Favourites';
import ShoppingCart from '../Pages/ShoppingCart';
import BookDetails from '../Pages/BookDetails';
function AllRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout><Home/> </Layout> }  />
        <Route path={'/books-list'} element={ <Layout><BookListing/></Layout>  }  />
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path = {'/favourites'} element={ <Layout><Favourites/></Layout>  } />
        <Route path = {'/cart'} element={ <Layout><ShoppingCart/></Layout>  } />
        {/* <Route path={'/search/:query'} element={<Layout><SearchScreen/></Layout> }  /> */}
        <Route path={'/book-detail/:id'} element={<Layout><BookDetails/></Layout> }  />
    </Routes>
  )
}

export default AllRoutes