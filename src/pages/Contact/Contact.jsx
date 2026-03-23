import { useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    topic: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: '', type: '' })
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setStatus({ 
        message: 'Thanks! Your message was sent successfully.', 
        type: 'success' 
      })
      setFormData({ name: '', email: '', subject: '', topic: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <PageHero 
        title="Contact Us"
        description="Have a question, suggestion, or recipe idea? We'd love to hear from you."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="section">
        <div className="container">
          <div className="contact-page-layout">
            {/* Contact Info */}
            <div className="contact-info-card">
              <span className="section-label">Get In Touch</span>
              <h2>Let's Connect</h2>
              <p>
                Whether you have a recipe request, feedback about the site, or just want to say hello,
                send us a message and we'll get back to you as soon as we can.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>hello@simplysavory.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <h3>Response Time</h3>
                    <p>Usually within 1–2 business days</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">🍴</span>
                  <div>
                    <h3>Topics</h3>
                    <p>Recipe ideas, partnerships, feedback, and general questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="recipe-request">Recipe Request</option>
                    <option value="site-feedback">Site Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="general-question">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                {status.message && (
                  <p className={`form-status ${status.type}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
