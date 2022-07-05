import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Categories from '../Cards/Categories';
import Products from '../Cards/Products';
import '../../styles/Components/Home.css';
import useFetchAuth from '../../hooks/useFetchAuth';
function Home() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);
    const userId =data.map((users) => {
        if (users.email === localStorage.getItem("username")) {

            return (
                localStorage.setItem("userId", users.id), 
                localStorage.setItem("name", users.name),
                localStorage.setItem("surname", users.surname),
                localStorage.setItem("cityUser", users.city)
            )
        }
    })

    return (
        <div className='home_container'>
            {userId}
            <div className='home_header'>
                <Header />
            </div>
            <div className='home_body'>
                <Navbar />
            </div>
            <div className='categories_body'>
                <Categories />
            </div>
            <div className='cards_body'>
                <Products />
            </div>
            <div className='home_footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;