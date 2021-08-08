import React from 'react'

const Header = () => {

  return (
    <React.Fragment>
    <div className="top-header">
      <div className="filters">
        <button className="filter-btn"></button>
        <div className="switch">
          <button className="switch-button-left"><span>Tarihe Göre</span></button>
          <button className="switch-button-right"><span>Lige Göre</span></button>
        </div>

        <button className="one-match-svg"></button>
        <button className="live-svg"></button>
        <button className="king-svg"></button>
      </div>

      <div className="odd-names">
        <div className="header-item">
          Maç Sonucu
        </div>
        <div className="header-item">
        İlk Yarı Sonucu
        </div>
        <div className="header-item large">
        Handikaplı Maç Sonucu
        </div>
        <div className="header-item small">
        2.5 Gol A/Ü
        </div>
        <div className="header-item small">
        Karşılıklı Gol
        </div>    
      </div>
    </div>
    </React.Fragment>
  )
}

export default Header
