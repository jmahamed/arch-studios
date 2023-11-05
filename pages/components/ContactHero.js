const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="image-container">
        <img src="./image-contact-hero.jpg" alt="typing" />
      </div>
      <div className="contact-content">
        <h1> Contact</h1>
        <div className="contact-inner-text">
          <h3>
            Tell us about <br />
            your project
          </h3>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
