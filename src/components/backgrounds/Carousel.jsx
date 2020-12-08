import {MAP_BACKGROUNDS} from './Api';
import React, { Component } from 'react';
import {Query} from '../Query';
import Slider from 'react-slick';


class Carousel extends Component {
    render() {
        const settings = {
          dots: true,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        };
        const imageUrl =
    process.env.NODE_ENV !== "development"
      ? background.image.url
      : process.env.REACT_APP_BACKEND_URL + background.image.url;
        return (
            <div>
                <Query query={MAP_BACKGROUNDS} id={null}>
                    {({data:{backgrounds}}) =>{
                        return(
                            <div>
                                <Slider {...settings}>
                                    <div>
                                    {backgrounds.map((background)=>{
                                        return(
                                         <img src={imageUrl} key={background.id} />
                                        )
                                    })}
                                    </div>
                                </Slider>
                            </div>
                        )
                    }}


                </Query>
            </div>
        )
    }
}
export default Carousel;