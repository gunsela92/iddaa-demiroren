import React from "react";

const OddHeaders = () => {

  const days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ]

  const getDate = () => {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() - 1);
    var year = String(today.getFullYear())
    if (day < 10) {
      day = day.replace("0", "");
    }
    var currentDay = today.getDay();
    return { day: day, month: months[month], year: year, currentDay: days[currentDay] };
  };

  return (
    <div className="oddHeader">
      <div className="date">{getDate().day + " " + getDate().month + " " + getDate().year + ", " + getDate().currentDay}</div>
      <div className="odd-numbers">
        <div className="odd-numbers-item">1</div>
        <div className="odd-numbers-item">0</div>
        <div className="odd-numbers-item">2</div>
        <div className="odd-numbers-item">1</div>
        <div className="odd-numbers-item">0</div>
        <div className="odd-numbers-item">2</div>
        <div className="odd-numbers-item">H</div>
        <div className="odd-numbers-item">1</div>
        <div className="odd-numbers-item">0</div>
        <div className="odd-numbers-item">2</div>
        <div className="odd-numbers-item">Alt</div>
        <div className="odd-numbers-item">Üst</div>
        <div className="odd-numbers-item">Var</div>
        <div className="odd-numbers-item">Yok</div>
        <div className="odd-numbers-item thin">+</div>
      </div>
    </div>
  );
};

export default OddHeaders;
