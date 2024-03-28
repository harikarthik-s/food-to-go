import React from "react";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
    const err = useRouteError(); 
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    text: {
      fontSize: "2rem",
      fontWeight: "bold",
      color:"red"
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Error!!! <br/></h1>
      <p style={styles.text}> {err.status}: {err.statusText || err.message}</p> 
    </div>
  );
};

export default Error404;
