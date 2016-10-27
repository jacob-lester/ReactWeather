var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on ReactJs framework.</p>
      <p>Tools used on this project include:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Used to
            search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
