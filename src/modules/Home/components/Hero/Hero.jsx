import Image from 'next/image';
import Link from 'next/link';

import styles from './Hero.module.scss';
import admin from '@/config/admin.json';
import announcement from '@/config/announcement.json';
import newProduct from '@/config/newProduct.json';
import heroImg from '/public/images/heroImg.png';
import name from '/public/images/logo-name.png';

const MainHero = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitle}>Кондитерська студія</h1>
        <Image
          src={name}
          alt="name"
          className={styles.heroName}
          loading="lazy"
        />
        <p className={styles.heroSlogan}>{admin.slogan}</p>
      </div>

      <Image
        src={heroImg}
        alt="logo"
        className={styles.heroImg}
        loading="lazy"
      />
    </>
  );
};

const Product = () => {
  const { name, imageURL, description, link } = newProduct;
  return (
    <>
      <div className={styles.heroWrapper}>
        <h1 className={styles.productTitle}>новинка</h1>
        <Link href={link} className={styles.productName}>
          {name}
        </Link>
        <p className={styles.productDescr}>{description}</p>
      </div>
      <Image
        src={imageURL}
        alt={name}
        width={500}
        height={500}
        loading="lazy"
        className={styles.productImg}
      />
    </>
  );
};

const Announcement = () => {
  const { title, message, image } = announcement;
  return (
    <>
      <div className={styles.heroWrapper}>
        <h1 className={styles.annTitle}>{title}</h1>
        <p className={styles.annMessage}>{message}</p>
      </div>

      <Image
        src={image}
        alt={title}
        className={styles.heroImg}
        width={500}
        height={500}
        loading="lazy"
      />
    </>
  );
};

const Hero = () => {
  return (
    <section className={styles.container}>
      {admin.hero === 'product' && <Product />}
      {admin.hero === 'hero' && <MainHero />}
      {admin.hero === 'announcement' && <Announcement />}
    </section>
  );
};

export default Hero;
