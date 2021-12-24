import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import Visitor from "./Visitor";
import axios from "axios";

const Container = () => {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8000/login").then((response) => {
      console.log(response.data);
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      } else {
        console.log(response.data.loggedIn + " khong co du lieu");
      }
    });
  }, []);

  console.log("[role]", role);

  return (
    <>
      {role === "admin" && <Admin />}
      {role === "visitor" && <Visitor />}
    </>
  );
};
export default Container;
