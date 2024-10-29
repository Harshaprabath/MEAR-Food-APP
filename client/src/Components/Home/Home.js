import React from 'react';
import Baner from '../Banner/Baner';
import Offers from '../Offers/Offers';
import Menu from '../Menu/Menu';
import About from '../About/About';
import BookTable from '../BookTable/BookTable';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';

function Home() {
    return (
        <div>
            <Baner></Baner>
            <Offers></Offers>
            <Menu></Menu>
            <About></About>
            <BookTable></BookTable>
            <ClientFeedBack></ClientFeedBack>
        </div>
    )
}

export default Home
