import Header from '../Header/Header';
import DataRow from '../DataRow/DataRow';
import Footer from '../Footer/Footer';

import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="data-box">
        <ul className="rates-list">
          <DataRow />
          <DataRow />
          <DataRow />
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default App;
