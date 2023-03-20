import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { Card, Col, Row } from 'react-bootstrap';


const images = ["../../../assets/images/media/files/01.jpg", "../../../assets/images/media/files/02.jpg", "../../../assets/images/media/files/03.jpg", 
"../../../assets/images/media/files/04.jpg", "../../../assets/images/media/files/05.jpg", "../../../assets/images/media/files/06.jpg", 
"../../../assets/images/media/files/07.jpg"];




export class Media extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="">
                <h5 className="mb-3 pt-5">Media :</h5>
                <Row className="masonry list-unstyled">
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/01.jpg"} alt='media1' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/02.jpg"} alt='media2' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/03.jpg"} alt='media3' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/04.jpg"} alt='media4' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/05.jpg"} alt='media5' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={"../../../assets/images/media/files/06.jpg"} alt='media6' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                </Row>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
        );
    }
}


