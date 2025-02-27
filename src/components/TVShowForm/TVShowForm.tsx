import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { nameRequest } from '../../store/thunks/TVShowsThunks.ts';
import Autocomplete from '../Autocomplete/Autocomplete.tsx';
import { selectTVShowList } from '../../store/slices/TVShowsSlice.ts';

const TvShowForm = () => {
  const TVShowList  = useAppSelector(selectTVShowList);
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && value.trim().length > 0) {
      dispatch(nameRequest(value));
    }
  };

  return (
    <div className="position-relative">
      <Form onSubmit={onSubmitForm}>
        <Form.Group>
          <FloatingLabel label="Search for TV show">
            <Form.Control onChange={onChange} type="text" placeholder="Search for TV show" />
          </FloatingLabel>
        </Form.Group>
      </Form>

      <Autocomplete TVShowList={TVShowList} />
    </div>
  );
};

export default TvShowForm;