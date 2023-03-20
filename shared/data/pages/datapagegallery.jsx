import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Col, Row } from 'react-bootstrap';


const images = [ '../../../assets/images/media/1.jpg', '../../../assets/images/media/2.jpg', '../../../assets/images/media/3.jpg', '../../../assets/images/media/4.jpg', 
'../../../assets/images/media/5.jpg', '../../../assets/images/media/6.jpg', '../../../assets/images/media/7.jpg', '../../../assets/images/media/8.jpg',
'../../../assets/images/media/9.jpg', '../../../assets/images/media/10.jpg', '../../../assets/images/media/11.jpg', '../../../assets/images/media/12.jpg' ];
  
  


export class LightGallery extends Component {
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
      <div>
        <Row className="masonry">
      <Col xs={6} sm={4} md={4} xl={3} className="brick">
        <img src={"../../../assets/images/media/1.jpg"} alt='media1' onClick={() => this.setState({ isOpen: true })}/>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3}  className="brick">
        <img src={"../../../assets/images/media/2.jpg"} alt='media2' onClick={() => this.setState({ isOpen: true })}/>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3}  className="brick">
         <img src={"../../../assets/images/media/3.jpg"} alt='media3' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3}  className="brick">
         <img src={"../../../assets/images/media/4.jpg"} alt='media4' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3}  className="brick">
         <img src={"../../../assets/images/media/5.jpg"} alt='media5' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/6.jpg"} alt='media6' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/7.jpg"} alt='media7' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/8.jpg"} alt='media8' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/9.jpg"} alt='media9' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/10.jpg"} alt='media10' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/11.jpg"} alt='media11' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={"../../../assets/images/media/12.jpg"} alt='media11' onClick={() => this.setState({ isOpen: true })}/>
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