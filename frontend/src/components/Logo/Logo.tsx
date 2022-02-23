import React from 'react';
import cx from 'classnames';

import LogoImage from '@/asset/logo/11STREET_color.png';

interface ILogo {
  className?: String;
}

const Logo = ({ className }: ILogo) => {
  return <img className={cx('logo', className)} src={LogoImage} alt="llst" />;
};

export default Logo;
