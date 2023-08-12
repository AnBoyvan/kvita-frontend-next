import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/images/logo-icon.png';
import name from '/public/images/logo-name.png';

const Logo = ({ styles }) => {
  return (
    <Link href="/" style={styles}>
      <Image src={logo} alt="logo" width="30" />
      <Image
        src={name}
        alt="name"
        width="70"
        style={{ marginLeft: 10 }}
      />
    </Link>
  );
};

export default Logo;
