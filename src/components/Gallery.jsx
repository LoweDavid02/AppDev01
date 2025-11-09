import React from 'react'
import Profile from './Profile'

export default function Gallery() {
  return (
    <section>
      <h2>Amazing scientists (Gallery)</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  )
}
