import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form action="submit_form.php" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Email: vegirajuajayvarma@gmail.com</p>
      <p>Phone: (425)-281-9139</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ajayvegiraju/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ajayvegiraju</a></p>
    </section>
  );
}

export default Contact;
