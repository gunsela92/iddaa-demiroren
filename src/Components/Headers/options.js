import React from 'react'

const Options = () => {
  return (
    <div className="wrapper-options">
      <select className="filter-date">
        <option value="A">Tarih</option>
      </select>
      <select className="filter-game-type">
        <option value="A">Oyun Türü</option>
      </select>
      <select className="filter-date">
        <option value="A">MBS</option>
      </select>
      <select className="filter-date benefits">
        <option value="A">Kral Fırsatlar</option>
      </select>
      <button data-comp-name="filterBox-clear" className="deleteButton">
      </button>
      <div className="search-filter">
        <input type="text" placeholder="Bültende ara"/>
        <svg></svg>
      </div>
    </div>
  )
}

export default Options
