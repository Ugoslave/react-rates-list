import './DataRow.css';

const DataRow = () => {
  return (
    <li className="data-row">
      <ul className="data-row__list">
        <li className="data-row__item-box data-row__item-box_content_code">
          <p className="data-row__text">Let`s go to Police!</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_price">
          <p className="data-row__text">Let`s go from IT!</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_ratio">
          <p className="data-row__text">Let`s go create!</p>
        </li>
      </ul>
    </li>
  );
}

export default DataRow;
