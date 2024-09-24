
import css from "./ErrorMessage.module.css";
import { Props } from "../../types";
import React from "react";

const ErrorMessage = ({children}:Props) => {
    return <div className={css.errormessage}>{children}</div>;
};

export default ErrorMessage;
