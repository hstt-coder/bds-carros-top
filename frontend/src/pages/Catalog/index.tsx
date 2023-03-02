import CarCard from '../../components/CarCard';
import SearchBar from '../../components/SearchBar';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="searching-container">
        <SearchBar/>
      </div>
      <div className="catalog-cars-container">
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
    </div>
  );
};

export default Catalog;