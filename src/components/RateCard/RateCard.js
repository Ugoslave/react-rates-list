import closeBtn from '../../img/card-close-button.svg';
import downArrow from '../../img/rate-card-down-arrow.png';
import upArrow from '../../img/rate-card-up-arrow.png';

import './RateCard.css';

const RateCard = ({ card, onClose }) => {
  return (
    <div className={`card ${card && "card_active"}`}>
      <div className="card__container">
        <button
          type="button"
          className="card__close-button"
          onClick={onClose}
        >
          <img
            src={closeBtn}
            alt="Закрыть"
            className="card__button-image"
          />
        </button>
        <div className="rate-card">
          <h2 className="rate-card__title">
            {`${card ? card.Nominal : ''} ${card ? card.Name : ''}`}
          </h2>
          <p className="rate-card__subtitle">
            {`${card ? card.Value : ''} рублей`}
          </p>
          <div className="rate-card__code-box">
            <ul className="rate-card__list">
              <li className="rate-card__code">
                {card ? card.CharCode : ''}
              </li>
              <li className="rate-card__code">
                {card ? card.NumCode : ''}
              </li>
            </ul>
            <img
              src={(card ? card.Value > card.Previous : '')  ? upArrow : downArrow}
              alt="Стрелка"
              className="rate-card__arrow"
            />
            <ul className="rate-card__list">
              <li className="rate-card__code">
                {`${(card ? (card.Previous - card.Value) > 0 : '') ? '-' : '+'}
                  ${card ? Math.abs((((card.Previous - card.Value) / card.Value) * 100).toFixed(3)) : ''} %`}
              </li>
              <li className="rate-card__code">
                {card ? card.Previous : ''}
              </li>
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
