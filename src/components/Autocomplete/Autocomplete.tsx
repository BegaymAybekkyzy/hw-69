import React from 'react';
import './Autocomplete.css';
import { NavLink } from 'react-router-dom';

interface Props {
  TVShowList: TVList[]
}

const Autocomplete: React.FC<Props> = ({TVShowList}) => {
  let autocomplete: React.ReactNode | null;
  if (TVShowList.length > 0) {
    autocomplete = (
      TVShowList.map((item) => (
        <NavLink key={item.id} className="link-tv-show" to={`/shows/${item.id}`}>{item.name}</NavLink>
      ))
    );
  }else autocomplete = null;


  return (
    <div className={autocomplete ? "autocomplete " : ""}>
      {autocomplete}
    </div>
  );
};

export default Autocomplete;