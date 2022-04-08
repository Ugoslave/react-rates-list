import React from 'react';

import './Header.css';

const Header = () => {
/*
  const headerBack = document.querySelector('.header');

const backImagesArray = [
  'header__background_first',
  'header__background_second',
  'header__background_third',
  'header__background_fourth',
  'header__background_fifth',
  'header__background_sixth',
  'header__background_seventh',
  'header__background_eighth',
  'header__background_ninth',
  'header__background_tenth',
];

function handleHeaderBackground (arr) {
  for (let i of arr) {
    setTimeout(function changeIndex() {
      /*headerBack.classList.add(arr[i]);
      console.log(arr[i]);
    }, 3000);
  }



handleHeaderBackground(backImagesArray);

*/

  const date = new Date();

  return (
    <div className="header">
      <h1 className="header__title">RATES &amp; ROUTES</h1>
      <p className="header__subtitle">&euro; Our rates - your opportunities &pound;</p>
      <p>{`Сегодня: ${date}`}</p>
    </div>
  );
}

export default Header;
