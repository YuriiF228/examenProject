'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as any

    const res = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    })

    if (!res.ok) {
      setError('Невірний email пароль')
      return
    }

    const data = await res.json()

    localStorage.setItem('token', data.accessToken)

    router.push('/')
  }

  return (
    <div>
      <h1>Вхід</h1>

      <form onSubmit={login}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Пароль" required />
        <button>Увійти</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
