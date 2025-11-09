
import React from 'react'

export default function Profile() {
  return (
    <div className="profile">
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        width={200}
        style={{ borderRadius: 8 }}
      />
      <div>
        <h3>Alan L. Hart</h3>
        <p>Physician and radiologist — one of the early proponents of using X-rays for diagnosis.</p>
      </div>
    </div>
  )
}
