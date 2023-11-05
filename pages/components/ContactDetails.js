const ContactDetails = () => {
  return (
    <div className="contacts">
      <div className="contact-details">
        <h3>
          Contact <br />
          Details
        </h3>
        <div className="office">
          <h4>Main Office</h4>
          <p>
            Mail : archone@mail.com <br />
            Address : 1892 Chenoweth Drive TN <br />
            Phone : 123-456-3451
          </p>
          <button>
            View on Map
            <img src="/arrow-right-black.png" alt="arrow" />
          </button>
        </div>
        <div className="office">
          <h4>Office II</h4>
          <p>
            Mail : archone@mail.com <br />
            Address : 3399 Wines Lane TX Phone <br />
            Phone : 832-123-4321
          </p>
          <button>
            View on Map
            <img src="/arrow-right-black.png" alt="arrow" />
          </button>
        </div>

      </div>
      <div id="map"></div>
    </div>
  );
};

export default ContactDetails;
