import React from 'react'

export default function page() {
  return (
    <div id="loginModal" className="modal">
        <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
                <input type="text" id="loginUsername" placeholder="Username" required />
                <input type="password" id="loginPassword" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}
