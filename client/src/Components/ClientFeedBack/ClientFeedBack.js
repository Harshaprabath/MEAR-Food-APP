import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const profiles = [
    {
        name: 'Moana Michell',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'images/client1.jpg', // Replace with actual image URLs
    },
    {
        name: 'Mike Hamell',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'images/client2.jpg', // Replace with actual image URLs
    },
    {
        name: 'Moana Michell',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'images/client1.jpg', // Replace with actual image URLs
    },
    {
        name: 'Mike Hamell',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'images/client2.jpg', // Replace with actual image URLs
    },
    // Add more profiles as needed
];

const ClientFeedBack = () => {
    return (
        
            <section class="client_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            What Says Our Customers
                        </h2>
                    </div>

        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items={1}
                    navText={['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']}
            dots={false}
            autoplayTimeout={5000} 
            autoplay={true}
            responsive={{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                },
            }}
        >
            {profiles.map((profile, index) => (
                <div key={index} style={styles.profileContainer}>
                    <div style={styles.textContainer}>
                        <p>{profile.description}</p>
                        <h3>{profile.name}</h3>
                        <p>magna aliqua</p>
                    </div>
                    <div style={styles.imageContainer}>
                        <img src={profile.image} alt={profile.name} style={styles.image} />
                    </div>
                </div>
            ))}
        </OwlCarousel>
        </div>
        </section>
    );
};

const styles = {
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        margin:'20px',        
    },
    textContainer: {
        backgroundColor: '#2a2a2a',
        color: '#fff',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    imageContainer: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid orange',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default ClientFeedBack;
