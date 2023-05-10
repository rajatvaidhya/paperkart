import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Search from './Search'
import Featured from './Featured'
import CategorySearch from './CategorySearch'
import Footer from './Footer'
import Footer2 from './Footer2'

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
    <Navbar/>
    <Search/>
    <Featured/>
    <CategorySearch/>
    <Footer/>
    <Footer2/>
    </>
  )
}

export default Home