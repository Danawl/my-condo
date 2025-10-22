'use client'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import { Alert } from '@mui/material';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('');
    setAlertType('');
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setEmail('');
        setMessage('');
        setStatus('Message sent!');
        setAlertType('success');
        setTimeout(() => {
          setStatus('');
          setAlertType('');
        }, 5000);
      } else {
        setStatus(data.message || 'Failed to send');
        setAlertType('error');
      }
    } catch {
      setStatus('Failed to send');
      setAlertType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container py-12 px-6 md:px-16 flex flex-col md:flex-row gap-8">
      {/* Left side: Contact Info */}
      <div className="bg-[#DDD8C7] text-primary rounded-tl-2xl rounded-bl-2xl p-8 flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Me</h2>
        <p className="mb-6 text-primary">
          Have questions or want to know more? Share your details and {"we’ll"} connect you directly with one of our trusted agents who can guide you every step of the way.
        </p>
        <div className="mb-6 flex items-center gap-3">
          <FaEnvelope className="h-6 w-6 text-primary" />
          <div>
            <span className="font-semibold text-primary block">Email</span>
            <span className="text-primary">daniel.awilb@gmail.com</span>
          </div>
        </div>
        <div className="mb-6 flex items-center gap-3">
          <FaPhone className="h-6 w-6 text-primary" />
          <div>
            <span className="font-semibold text-primary block">Phone</span>
            <span className="text-primary">09454079710</span>
          </div>
        </div>
      </div>
      <form className="bg-[var(--main-bg)] rounded-tr-2xl rounded-br-2xl p-8 flex-1 flex flex-col justify-center space-y-4" onSubmit={handleSubmit}>
        <label className="text-white font-semibold" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="p-2 rounded bg-[#e0e0e0] focus:outline-none"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label className="text-white font-semibold" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          className="p-2 rounded bg-[#e0e0e0] focus:outline-none"
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-4 bg-white text-[var(--main-bg)] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {status && alertType && (
          <Alert severity={alertType} sx={{ mt: 2 }}>
            {status}
          </Alert>
        )}
      </form>
    </section>
  );
}