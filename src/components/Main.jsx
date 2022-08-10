import React from "react";

import { Button, Drawer } from "@mui/material";

import CashModal from "./CashModal/index";

const Main = () => {
  const isCreditCard = (str) =>
    str.trim().length !== 0 &&
    str
      .replace(/\D/g, "")
      .split("")
      .reverse()
      .reduce(
        (s, c, i) => (s += +(i % 2 !== 0 && (c *= 2) > 9 ? (c -= 9) : c)),
        0
      ) %
      10 ===
      0;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ right: open });
  };

  return (
    <div className="main">
      <div className="main__button-list">
        <Button className="main__button">Додати картку</Button>
        <Button onClick={toggleDrawer(true)}>Додати готівку</Button>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
          <CashModal />
        </Drawer>
      </div>
      <div className="card__wrap">
        <div className="card">
          <div className="cc">
            <span className="chip"></span>
            <span className="mastercard">MasterCard</span>
            <div className="number__wrap">
              <span className="cc-number">5032 9334 3764 9846</span>
              <button className="copy__btn">copy</button>
            </div>
            <span className="cc-date expiry">01/99</span>
            <span className="cc-name">Cassio Cardoso</span>
          </div>
        </div>
        <Button className="card__delete-btn" variant="outlined" color="error">
          Видалити
        </Button>
      </div>

      <div className="card__wrap">
        <div className="card">
          <div className="cc">
            <span className="chip"></span>
            <span className="mastercard">MasterCard</span>
            <div className="number__wrap">
              <span className="cc-number">5032 9334 3764 9846</span>
              <button className="copy__btn">copy</button>
            </div>
            <span className="cc-date expiry">01/99</span>
            <span className="cc-name">Cassio Cardoso</span>
          </div>
        </div>
        <Button className="card__delete-btn" variant="outlined" color="error">
          Видалити
        </Button>
      </div>
    </div>
  );
};

export default Main;
