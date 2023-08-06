import Carousel from 'react-bootstrap/Carousel';
import "./../css/Components.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/0cgkp3c/Whats-App-Image-2023-08-06-at-12-15-28.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/S5r59Kc/Whats-App-Image-2023-08-06-at-12-15-29.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/z2b4gz2/Whats-App-Image-2023-08-06-at-12-15-129.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/WHrHV4K/Whats-App-Image-2023-08-06-at-12-15-229.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/2PgfLSg/Whats-App-Image-2023-08-06-at-12-155-30.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ibb.co/zfmy7Ct/Whats-App-Image-2023-08-06-at-12-155-31.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;