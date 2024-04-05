import { createContext } from "react";

const userContext = createContext(
    {
        loggedInUser : "anonymous",
        cartItems: 0
    }
)

export default userContext;