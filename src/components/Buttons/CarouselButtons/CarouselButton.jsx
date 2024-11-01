import './CarouselButton.css';

const CarouselButton = ({ label, onClick, disabled }) => (
  <button className="carousel-btn" onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default CarouselButton;
