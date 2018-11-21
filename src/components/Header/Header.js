import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header>
    <button type="button" className={cx('button-menu')}>메뉴</button>
    <h1><Link to="/">여기어때</Link></h1>
    <button type="검색" className={cx('button-search')}>검색</button>
  </header>
);

export default Header;
