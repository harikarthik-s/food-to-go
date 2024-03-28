import "../../css/Body.css";
import { LOGO_URL } from "../../utils/constants";

const About = () => {
  return (
    <div className="about">
      <h1>
        About <span>Food-to-Go</span>
      </h1>
      <p>
        Food-to-Go is a user-friendly and convenient food ordering application
        that empowers users to order their favorite dishes from the comfort of
        their own homes. With a wide selection of restaurants to choose from,
        Food-to-Go offers a diverse range of cuisines and culinary experiences
        to satisfy every palate.<br/> The application is designed to provide a
        seamless and intuitive ordering process. Users can easily browse through
        the menus of participating restaurants, explore dish options, and
        customize their orders according to their preferences. Whether it's a
        quick bite or a lavish meal, Food-to-Go caters to all types of cravings.<br/>
        One of the key features of Food-to-Go is its user-friendly interface.
        Users can effortlessly navigate through the various sections
        of the app, search for specific restaurants or dishes, and place their
        orders with just a few taps or clicks. Food-to-Go also prioritizes
        convenience and flexibility. Users can choose to have their orders
        delivered to their doorstep or opt for pickup at their preferred
        restaurant location. The application provides real-time tracking of
        orders, allowing users to monitor the progress of their food and
        estimate the delivery time. <br/>
        Overall, Food-to-Go is a valuable tool for individuals who seek a
        convenient and enjoyable way to order food from their favorite
        restaurants. With its user-friendly interface, diverse restaurant
        selection, and secure payment options, Food-to-Go simplifies the food
        ordering process and makes it a delightful experience for users.
      </p>

      <img src={LOGO_URL} />
    </div>
  );
};

export default About;
