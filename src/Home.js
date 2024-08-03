import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img alt="Shop Toys and Games"
                    src="https://norvanreports.com/wp-content/uploads/2020/09/Amazon-750x375.jpg"
                    className="home__image" />

                <div className='home__row'>
                    <Product
                        id="5854"
                        title="Moustafa Ahmed Hendawy"
                        price={125}
                        rating={5}

                        image="https://m.media-amazon.com/images/I/81FXDfxaHGL._AC_UL320_.jpg" />
                    <Product
                        id="8541"
                        title="Moustafa Ahmed Hendawy"
                        price={250}
                        rating={5}

                        image="https://m.media-amazon.com/images/I/617zUY8auPL._AC_UL320_.jpg" title="Moustafa" price={27.5} />
                </div>

                <div className='home__row'>
                    <Product
                        id="8474"
                        title="Moustafa Ahmed Hendawy"
                        price={8547}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61l8PUdDa-L._AC_UL320_.jpg" />
                    <Product
                        id="2541"
                        title="Moustafa Ahmed Hendawy"
                        price={879}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71AoES485sL._AC_UL320_.jpg" />
                    <Product
                        id="2469"
                        title="Moustafa Ahmed Hendawy"
                        price={369}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" />
                </div>

                <div className='home__row'>
                    <Product
                        id="1269"
                        title="Moustafa Ahmed Hendawy"
                        price={470}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61Squ7U2zRL._AC_SY200_.jpg" />
                </div>

            </div>
        </div>
    )
}

export default Home
