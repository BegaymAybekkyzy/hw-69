import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { nameRequest } from "../../store/thunks/TVShowsThunks.ts";
import Autocomplete from "../Autocomplete/Autocomplete.tsx";
import {
  closingAutocomplete,
  selectTVShowList,
  showingAutocomplete,
} from "../../store/slices/TVShowsSlice.ts";

const TvShowForm = () => {
  const TVShowList = useAppSelector(selectTVShowList);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length > 0) {
      dispatch(nameRequest(value));
      dispatch(showingAutocomplete());
    } else {
      dispatch(closingAutocomplete());
    }
  };

  return (
    <div className="position-relative">
      <Form onSubmit={onSubmitForm}>
        <Form.Group>
          <FloatingLabel label="Search for TV show">
            <Form.Control
              onChange={onChange}
              onFocus={() => dispatch(showingAutocomplete())}
              type="text"
              value={inputValue}
              placeholder="Search for TV show"
            />
          </FloatingLabel>
        </Form.Group>
      </Form>

      <Autocomplete setInputValue={setInputValue} TVShowList={TVShowList} />
    </div>
  );
};

export default TvShowForm;
