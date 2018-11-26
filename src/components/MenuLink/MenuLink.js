import React, {Component} from 'react';
import styles from './MenuLink.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class MenuLink extends Component {
  render() {
    return (
      <div className={cx('menu')}>
        <li>
          <a href="#">
            <span className={cx('menu-01')}></span>
            <p>모텔</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-02')}></span>
            <p>호텔</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-03')}></span>
            <p>펜션</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-04')}></span>
            <p>리조트</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-05')}></span>
            <p>게스트하우스</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-06')}></span>
            <p>캠핑,글램핑</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-07')}></span>
            <p>한옥</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-08')}></span>
            <p>내주변</p>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={cx('menu-09')}></span>
            <p>얼리버드</p>
          </a>
        </li>
      </div>
    );
  }
}

export default MenuLink;
