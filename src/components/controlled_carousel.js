/**
 * Created by einavcarmon on 17/04/2017.
 */
import React, {Component} from 'react';
import  {Carousel, CarouselItem, Button } from 'react-bootstrap';

export default class ControlledCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null,
            items: props.items
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return (
            <div>
            <Carousel activeIndex={this.state.index}
                      direction={this.state.direction}
                      onSelect={this.handleSelect}
                      indicators={false}>

                {this.state.items.map((item) => {
                    return (
                        <CarouselItem key={item.id}>
                            <p className="screen-name">{item.user.screen_name} <span className="user-name">{item.user.first_name} {item.user.last_name} </span></p>

                            <img width={173} height={173} src={item.thumbnail_url}/>
                            <div className="carousel-item">
                                <h3 className="truncate">{item.name}</h3>
                                <p>
                                {item.tags.map((tag) => {
                                    return <Button bsStyle="default" key={tag} className="product-tag">{tag}</Button>
                                })}
                                </p>
                            </div>


                        </CarouselItem>
                    )
                })}

            </Carousel>

            </div>
        );
    }

//     render() {
//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             accessibility:true,
//             arrows:true,
//             slidesToScroll: 1
//         };
//
//         return (
//             <Slider {...settings} onSelect={this.handleSelect}>
//                 {this.state.items.map((item) => {
//                     return <div key={item.key}>
//                         <img width={350} height={350} alt="350X350" src={item.src}/>
//                         <div className="carousel-caption">
//                             <h3>{item.label}</h3>
//                             <p>{item.text}</p>
//                         </div>
//                     </div>
//                 })}
//             </Slider>
//         );
//     }
};

ControlledCarousel.defualtProps = {
    index: 0,
    direction: null,
    items: []
}