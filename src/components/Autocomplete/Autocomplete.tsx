import React from "react";
import "./Autocomplete.css";
import { NavLink } from "react-router-dom";
import {
  closingAutocomplete,
  selectShowAutocomplete,
  showingAutocomplete,
} from "../../store/slices/TVShowsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";

interface Props {
  TVShowList: TVList[];
  setInputValue: (value: string) => void;
}

const Autocomplete: React.FC<Props> = ({ TVShowList, setInputValue }) => {
  const dispatch = useAppDispatch();
  const isShow = useAppSelector(selectShowAutocomplete);

  const onClickAutocomplete = (name: string) => {
    dispatch(closingAutocomplete());
    setInputValue(name);
  };

  let autocomplete: React.ReactNode | null;

  if (TVShowList.length > 0) {
    autocomplete = TVShowList.map((item) => (
      <NavLink
        key={item.id}
        onClick={() => onClickAutocomplete(item.name)}
        className="link-tv-show"
        to={`/shows/${item.id}`}
      >
        {item.name}
      </NavLink>
    ));
  } else autocomplete = null;

  return (
    <div
      className={`autocomplete ${isShow ? "open" : ""}`}
      onMouseEnter={() => dispatch(showingAutocomplete())}
      onMouseLeave={() => dispatch(closingAutocomplete())}
    >
      {autocomplete}
    </div>
  );
};

export default Autocomplete;
