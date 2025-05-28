import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './../../UserContext';
import styles from './UserHeaderNav.module.css'

import feedImg from '../../Assets/feed.svg';
import estatisticasImg from '../../Assets/estatisticas.svg';
import sairImg from '../../Assets/sair.svg';
import AddPhoto from '../../Assets/adicionar.svg'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end className="nav-link">
        <img src={feedImg} alt="Minhas Fotos" />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas" className="nav-link">
        <img src={estatisticasImg} alt="Estatísticas" />
        {mobile && 'Estatísticas'}
        
      </NavLink>

      <NavLink to="/conta/postar" className="nav-link">
      <img src={AddPhoto } alt='add foto'/>
         {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout} className="logout-button">
        <img src={sairImg} alt="Sair" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
