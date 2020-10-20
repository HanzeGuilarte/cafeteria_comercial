import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const actionRender = async (e) => {
    e.preventDefault();
    history.push("/almacen");
  };
  return <>Hello from Home</>;
}
