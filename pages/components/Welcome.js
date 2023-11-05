const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome</h1>

      <div className="welcome-content">
        <div className="welcome-txt">
          <h2>
            Welcome to <br />
            Arch Studio
          </h2>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results. <br />
            <br />
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight. <br />
            <br />
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img src="./image-welcome.jpg" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
