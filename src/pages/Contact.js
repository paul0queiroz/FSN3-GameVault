import React from "react";

const Contact = () => {
  return (
    <section
      className="position-relative text-secondary d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh", width: "100%" }}
    >
      <div className="container px-5 py-5">
        {/* Header */}
        <div className="text-center w-100 mb-4">
          <h1 className="h2 fw-medium mb-3 text-dark">Entre em contato</h1>
          <p className="mx-auto w-75 lead">
            Algum jogo não está funcionando? Tem alguma dúvida? Entre em contato
            conosco.
          </p>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label small">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label small">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label small">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your message..."
                />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="border-top pt-4 mt-4 text-center">
              <a
                href="mailto:example@email.com"
                className="d-block mb-2 text-primary"
              >
                emailFake@email.com
              </a>
              <div className="d-inline-flex">
                <a href="#" className="me-3 text-secondary">
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="me-3 text-secondary">
                  {/* Twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="me-3 text-secondary">
                  {/* Instagram */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <circle cx="17.5" cy="6.5" r="0.5" />
                  </svg>
                </a>
                <a href="#" className="text-secondary">
                  {/* LinkedIn */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
