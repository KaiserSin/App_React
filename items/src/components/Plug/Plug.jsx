import React from 'react';
import './Plug.scss';
import Plug from '../../assets/images/plug/plug.svg'

const PlaceholderPage = () => {
  return (
    <div className="placeholder-container">
      <div className="placeholder-content">
        <img src={Plug} alt="Server Icon" className="server-icon" />
        <p className="placeholder-text">
          Скоро тут что-то будет...
          <br />
          Но пока тут ничего нет :)
        </p>
        <button className="back-button" onClick={() => window.history.back()}>Назад</button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
