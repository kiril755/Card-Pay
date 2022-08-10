import React from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import styles from "./CashModal.module.scss";

import { useForm } from "react-hook-form";

const CashModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  ///////////
  const [currency, setCurrency] = React.useState("");
  const [amountError, setAmountError] = React.useState(false);
  const [disabledBtn, setDisabledBtn] = React.useState(true);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  ///////////
  const currencyValues = ["uah", "usd", "eur"];
  ///////////

  return (
    <div className={styles.cash__wrap}>
      <form className={styles.cash__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__input_wrap}>
          <TextField
            {...register("amount")}
            className={styles.cash__input}
            error={amountError}
            helperText={amountError ? "Incorrect entry." : ""}
            id="outlined-error"
            label={amountError ? "error" : "amount"}
            variant="outlined"
            onChange={(e) => {
              isNaN(e.target.value)
                ? setAmountError(true) || setDisabledBtn(true)
                : setAmountError(false) || setDisabledBtn(false);
            }}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">currency</InputLabel>
            <Select
              {...register("currency")}
              labelId="demo-simple-select-label"
              value={!currency ? currencyValues[0] : currency}
              label="currency"
              onChange={handleChange}
            >
              {currencyValues.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className={styles.form__btn_wrap}>
          <Button
            className={styles.form__btn__save}
            disabled={disabledBtn}
            variant="contained"
            type="hidden"
            onClick={() => {}}
          >
            Зберегти
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={() => {
              reset();
              setCurrency(currencyValues[0]);
              setAmountError(false);
              setDisabledBtn(true);
            }}
          >
            Скасувати
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CashModal;

console.log(document.querySelector("#outlined-basic"));
