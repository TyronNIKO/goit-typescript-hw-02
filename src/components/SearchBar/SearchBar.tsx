import React from "react";
import { Props } from "../../types";
import css from "./SearchBar.module.css";
import {FaMagnifyingGlass} from "react-icons/fa6";


const SearchBar = ({onSubmit}: Props) => {
    return (
        <header className={css["search-bar"]}>
            <form onSubmit={onSubmit}>
                <input type="text" autoComplete="off" name="request" autoFocus placeholder="Search images and photos" />
                <button type="submit">
                    <FaMagnifyingGlass />
                </button>
            </form>
        </header>
    );
};
export default SearchBar;
