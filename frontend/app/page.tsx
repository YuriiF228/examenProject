'use client'
import { useEffect, useState } from 'react';

type Product = {
  _id: string;
  name: string;
  price: number;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = () => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;

    await fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        price: Number(form.price.value),
      }),
    });

    form.reset();
    loadProducts(); //обновив список
  };

  return (
    <div>
      <h1>Товари</h1>

      {/* Форма додавання чогось */}
      <form onSubmit={addProduct}>
        <input name="name" placeholder="Назва товару" required />
        <input name="price" type="number" placeholder="Ціна" required />
        <button>Додати товар</button>
      </form>

      <hr />

      {/* Список товарів */}
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} — {p.price} "$"
          </li>
        ))}
      </ul>
    </div>
  );
}
