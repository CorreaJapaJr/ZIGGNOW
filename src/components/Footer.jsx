import React from 'react';
import styles from './Footer.module.css';
import DogFooter from '../Assets/dogs-footer.svg';

const Footer = () => {
  return <div className={styles.footer}>
    <p>Dogs. Alguns direitos Reservados</p>
    <img src={DogFooter} alt="Footer Dog" />
  </div>;
};

export default Footer;
