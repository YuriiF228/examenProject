'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/login')
      return
    }

    fetch('http://localhost:4000/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Dashboard — Товари</h1>

      <ul>
        {products.map((p: any) => (
          <li key={p._id}>
            {p.name} — {p.price} $
          </li>
        ))}
      </ul>
    </div>
  )
}
