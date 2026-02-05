'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Product = {
  _id: string
  name: string
  article?: string
  price: number
  quantity: number
}

export default function Dashboard() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as any

    await fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        article: form.article.value || undefined,
        price: Number(form.price.value),
        quantity: Number(form.quantity.value),
      }),
    })

    form.reset()
    const res = await fetch('http://localhost:4000/products')
    setProducts(await res.json())
  }

  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 text-white flex justify-center p-8">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold">Product Dashboard</h1>
            <p className="text-slate-400 text-sm">
              Manage products and stock
            </p>
          </div>

          <button onClick={logout} className="btn-ghost">
            Logout
          </button>
        </div>

        {/* Add product */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 mb-12 shadow-xl">
          <h2 className="text-lg font-medium mb-4">Add new product</h2>

          <form
            onSubmit={addProduct}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input name="name" className="input" placeholder="Name" required />
            <input name="article" className="input" placeholder="Article" />
            <input name="price" type="number" className="input" placeholder="Price" required />
            <input name="quantity" type="number" className="input" placeholder="Quantity" required />

            <button className="btn-primary md:col-span-4">
              Create product
            </button>
          </form>
        </div>

        {/* Products table */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="th">Name</th>
                <th className="th">Article</th>
                <th className="th">Price</th>
                <th className="th">Quantity</th>
              </tr>
            </thead>

            <tbody>
              {products.map(p => (
                <tr
                  key={p._id}
                  className="border-t border-slate-700 hover:bg-blue-500/10 transition"
                >
                  <td className="td">{p.name}</td>
                  <td className="td">{p.article || '—'}</td>
                  <td className="td">{p.price}</td>
                  <td className="td">{p.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
