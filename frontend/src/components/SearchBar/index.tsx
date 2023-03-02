import './styles.css';

const SearchBar = () => {
  return (
    <form>
      <div className="search-bar-container">
        <input className="search-bar-input" type="text" placeholder="Digite sua busca"/>
        <button className="btn btn-primary" type="submit">BUSCAR</button>
      </div>
    </form>
  );
};

export default SearchBar;
