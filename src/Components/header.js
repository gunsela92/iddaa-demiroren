import React from 'react'

const Header = () => {

  return (
    <React.Fragment>
    <div className="top-header">
      <div className="filters"/>
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
