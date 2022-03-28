import React from 'react';

import Header from '../Header/Header';
import DataRow from '../DataRow/DataRow';
import Footer from '../Footer/Footer';
import RateCard from '../RateCard/RateCard';
import api from '../../utils/api';
import dataLoader from '../../img/loader.gif';

import './App.css';


const App = () => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [rates, setRates] = React.useState([{
    CharCode: "Please, waiting...",
    Value: "Please, waiting...",
    Previous: "Please, waiting...",
  }]);

  React.useEffect(() => {
    api
      .getAllRates()
      .then((res) => {
        setRates(Object.values(res.Valute));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
  }

  const closeCard = () => {
    setSelectedCard(null);
  }

  return (
    <>
      <div className="app">
        <Header />
        <section className="data-box">
          <ul className="rates-list">
            {rates.map((item) => {
              return (
                <DataRow
                  key={item.ID}
                  rate={item}
                  onRowClick={handleCardClick}
                />
              );
            })}
          </ul>
        </section>
        <Footer />
      </div>
      <RateCard
        card={selectedCard}
        onClose={closeCard}
      />
    </>
  );
}

export default App;
