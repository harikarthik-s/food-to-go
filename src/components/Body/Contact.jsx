import "./Body.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" />
          <button className="send-btn" type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h1>Our Contact Information</h1>
        <p>
          <strong>Address:</strong> 123 Main Street, Anytown, CA 12345
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@foodtogo.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
