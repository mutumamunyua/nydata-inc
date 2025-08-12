// File: src/components/ContactSection.tsx

'use client'

import { useState } from 'react'

export default function ContactSection() {
  // MODIFICATION: Add 'fax' to form state for the honeypot.
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', fax: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    
    let timeoutId: NodeJS.Timeout | null = null;
    
    try {
      const controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), 10000)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      })

      if (timeoutId) clearTimeout(timeoutId)

      if (res.ok) {
        setStatus('success')
        // MODIFICATION: Reset the 'fax' field on successful submission.
        setForm({ name: '', email: '', company: '', message: '', fax: '' })
      } else {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
    } catch (error: unknown) {
      if (timeoutId) clearTimeout(timeoutId)
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          setErrorMessage('Request timed out. Please check your connection and try again.')
        } else if (error.message.includes('HTTP error')) {
          setErrorMessage('Server error. Please try again later.')
        } else {
          setErrorMessage('Network error. Please check your connection and try again.')
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
      
      setStatus('error')
    }
  }

  return (
    // MODIFICATION: Replaced inline style with Tailwind's 'font-serif' class.
    // This requires the font setup in layout.tsx and tailwind.config.js.
    <div
      className="bg-gray-100 bg-opacity-90 p-8 rounded-lg max-w-xl mx-auto font-serif"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="company" className="block mb-1 font-medium text-gray-700">
            Company (Optional)
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        {/* --- MODIFICATION START: Add honeypot field to trap spam bots. --- */}
        <div className="absolute left-[-5000px]" aria-hidden="true">
          <label htmlFor="fax">Do not fill this out</label>
          <input
            type="text"
            id="fax"
            name="fax"
            tabIndex={-1}
            autoComplete="off"
            value={form.fax}
            onChange={handleChange}
          />
        </div>
        {/* --- MODIFICATION END --- */}

        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        
        {status === 'success' && (
          <p className="mt-4 text-center text-green-600">Message sent successfully! Thank you.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        )}
      </form>
    </div>
  )
}
