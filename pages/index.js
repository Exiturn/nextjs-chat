import React, { useContext } from "react";

import { Context } from '../context'

import { useRouter } from "next/router";

import axios from "axios";

/**
 * * Private key: 89172c7e-ee38-4e2e-8fa8-7def93d9ac4e
 */

export default function Auth() {
  const {
    username,
    setUsername,
    secret,
    useSecret,
  } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: secret},
      {headers: {"Private-key": '89172c7e-ee38-4e2e-8fa8-7def93d9ac4e'}}
    )
    .then(r => router.push('/chats'))
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">Next Chat App</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => useSecret(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
