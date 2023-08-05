import Image from 'next/image';
import styles from './Hero.module.scss';
import hero from '/public/data/hero.json';
import admin from '/public/data/admin.json';
import newProduct from '/public/data/newProduct.json';
import announsment from '/public/data/announsment.json';
import name from '/public/images/logo-name.png';
import heroImg from '/public/images/heroImg.png';
import Link from 'next/link';

const MainHero = () => {
  const { title, slogan } = hero;
  return (
    <>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <Image
          src={name}
          alt="name"
          className={styles.heroName}
          loading="lazy"
        />
        <p className={styles.heroSlogan}>{slogan}</p>
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

const Announsment = () => {
  const { title, message, image } = announsment;
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
      {admin.hero === 'announsment' && <Announsment />}
    </section>
  );
};

export default Hero;
