import './styles.css';
import CarCardImage from '../../assets/images/red-car.png';

const CarCard = () => {
  return (
    <div className="car-card-container">
      <div className="car-image-container">
        <img src={CarCardImage} alt="Nome do carro" />
      </div>
      <div className="car-card-content">
        <h3>Audi Supra TT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
        <button className="btn btn-primary">COMPRAR</button>
      </div>
    </div>
  );
};

export default CarCard;
