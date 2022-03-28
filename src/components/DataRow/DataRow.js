import './DataRow.css';

const DataRow = ({ rate, onRowClick }) => {

  const handleClick = () => {
    onRowClick(rate);
  }


  return (
    <li
      className="data-row"
      onClick={handleClick}
    >
      <ul className="data-row__list">
        <li className="data-row__item-box data-row__item-box_content_code">
          <p className="data-row__text">{rate.CharCode}</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_price">
          <p className="data-row__text">{rate.Value}</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_ratio">
          <p className="data-row__text">{rate.Previous}</p>
        </li>
      </ul>
    </li>
  );
}

export default DataRow;
