import "./Body.css";
import { LOGO_URL } from "../../utils/constants";

const About = () => {
  return (
    <div className="about">
      <h1>About Food-to-Go</h1>
      <p>
        Food-to-Go is a food ordering application that allows users to order
        food from their favorite restaurants.
      </p>
      <p>
        The application is designed to be user-friendly and easy to use. Users
        can browse the menus of restaurants, add items to their cart, and
        checkout.
      </p>
      <p>
        Food-to-Go is a great way to get your favorite food delivered to your
        door.
      </p>
      <img src={LOGO_URL} />
    </div>
  );
};

export default About;