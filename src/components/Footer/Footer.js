import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {`${new Date().getFullYear()} Rates & Routes Russia`}</p>
      <ul className="footer__link-box">
        <li className="footer__item">
          <a href="https://ru.tradingview.com/" target="_blank" className="footer__link">TradingView</a>
        </li>
        <li className="footer__item">
          <a href="https://www.fxclub.org/" target="_blank" className="footer__link">ForexClub</a>
        </li>
        <li className="footer__item">
          <a href="https://forex.finam.ru/" target="_blank" className="footer__link">ФИНАМ</a>
        </li>
        <li className="footer__item">
          <a href="https://alfaforex.ru/analytics/" target="_blank" className="footer__link">Аналитика от Aльфа Форекс</a>
        </li>
        <li className="footer__item">
          <a href="https://www.tinkoff.ru/invest/research/" target="_blank" className="footer__link">Аналитика от Tinkoff</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
