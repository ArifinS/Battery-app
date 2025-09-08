'use client'
import React, { useState } from 'react';
import './contact_form.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        {submitted ? (
          <div className="contact-success">
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : null}
        <div className="contact-fields">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="contact-btn"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;