import React, { Fragment } from 'react';
import styles from './MainSpot.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const MainSpot = () => {
  return(
    <Fragment>
      <div className={cx('main-spot')}>
        <img src="https://image.goodchoice.kr/images/web_v3/mainspot_181022.jpg" alt=""/>
      </div>
    </Fragment>
  )
};

export default MainSpot;
