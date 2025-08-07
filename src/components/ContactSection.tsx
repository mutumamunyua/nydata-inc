'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange}
            required className="w-full p-2 border rounded"/>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" name="email" type="email" value={form.email}
            onChange={handleChange} required className="w-full p-2 border rounded"/>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" name="message" rows={4} value={form.message}
            onChange={handleChange} required className="w-full p-2 border rounded"/>
        </div>
        <button type="submit" disabled={status==='sending'}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {status==='sending'?'Sending...':'Send Message'}
        </button>
        {status==='success' && <p className="mt-2 text-green-600">Message sent!</p>}
        {status==='error'   && <p className="mt-2 text-red-600">Failed to send.</p>}
      </form>
    </section>
  )
}
