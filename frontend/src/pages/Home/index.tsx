import { Link } from 'react-router-dom';
import HomeCarImage from "../../assets/images/yellow-car.png";
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card bg-primary">
        <div className="home-image-container">
          <img src={HomeCarImage} alt="" />
        </div>
        <div className="home-content-container">
          <h2>O carro perfeito para você</h2>
          <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
        </div>
      </div>
      <div className="home-link-container">
        <Link to="/catalog"><button className="btn btn-primary my-btn">Ver Catálogo</button></Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
