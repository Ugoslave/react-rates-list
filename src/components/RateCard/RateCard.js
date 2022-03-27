import closeBtn from '../../img/card-close-button.svg';
import downArrow from '../../img/rate-card-down-arrow.png';
import upArrow from '../../img/rate-card-up-arrow.png';

import './RateCard.css';

const RateCard = ({ card }) => {
  return (
    <div className="card card_active">
      <div className="card__container">
        <button type="button" className="card__close-button">
          <img
            src={closeBtn}
            alt="Закрыть"
            className="card__button-image"
          />
        </button>
        <div className="rate-card">
          <h2 className="rate-card__title">100 британских фунтов стерлингов Великобритании</h2>
          <p className="rate-card__subtitle">852247</p>
          <p className="rate-card__timestamp">23 : 35 : 07</p>
          <div className="rate-card__code-box">
            <ul className="rate-card__list">
              <li className="rate-card__code">GBP</li>
              <li className="rate-card__code">102</li>
            </ul>
            <img
              src={upArrow}
              alt="Стрелка"
              className="rate-card__arrow"
            />
            <ul className="rate-card__list">
              <li className="rate-card__code">0.8 %</li>
              <li className="rate-card__code">164.25</li>
            </ul>
          </div>
          <p className="rate-card__previous-rate-title">за последние 10 дней:</p>
          <ul className="rate-card__rates-list">
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
            <li className="rate-card__rate"><span className="rate-card__date">22.03.2022</span>346</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RateCard;
