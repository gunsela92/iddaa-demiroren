import React from 'react'

const CouponFooter = () => {
  return (
    <div className="footer">
    <div className="tools">
      <div className="save-coupon">
        <input type="text" name="couponName" placeholder="Kupon adı"/>
        <button>Kaydet</button>
      </div>
      <div className="icons">
        <svg className="settings"></svg>
        <svg className="trash"></svg>
      </div>
    </div>
  </div>
  )
}

export default CouponFooter
