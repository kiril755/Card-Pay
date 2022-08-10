import React from "react";
import { Button, Drawer } from "@mui/material";

import CashModal from "./CashModal/index";

const Accaunt = () => {
  //////
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
    <div className="accaunt">
      <ul className="accaunt__balance-list">
        <li className="accaunt__balance-item balance">
          <h2 className="balance__title">Баланс</h2>
          <p className="balance__item">- 1287.75 UAH</p>
          <p className="balance__item">- 500 USD</p>
        </li>
      </ul>
      <ul className="accaunt__cash">
        <li className="accaunt__cash-item cash">
          <h2 className="cash__title">Готівка</h2>
          <div className="cash__wrap">
            <p className="cash__item">- 1000 UAH</p>
            {/* <Button
              onClick={toggleDrawer(true)}
              className="cash__button"
              type="button"
            >
              редагувати
            </Button> */}
            <div>
              <Button onClick={toggleDrawer(true)}>редагувати</Button>
              <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
              >
                <CashModal />
              </Drawer>
            </div>
          </div>
        </li>
      </ul>
      <ul className="accaunt__cards">
        <li className="accaunt__cards-item cards">
          <h2 className="cards__title">Мої картки</h2>
          <div className="cards__wrap">
            <p className="cards__item">- Mono 287.75 UAH</p>
            <Button className="cards__button" type="button">
              редагувати
            </Button>
          </div>

          <div className="cards__wrap">
            <p className="cards__item">- Privat 500 USD</p>
            <Button className="cards__button" type="button">
              редагувати
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Accaunt;
