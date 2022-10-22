import { useState } from 'react';
import PropTypes from 'prop-types'
import { Input, Btn } from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchingQuery, setSearchingQuery] = useState('');

  const handleChange = e => {
    setSearchingQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchingQuery.trim() === '') {
      return;
    }

    onSubmit(searchingQuery);
    setSearchingQuery('');
    };
    

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={searchingQuery} autoFocus onChange={handleChange} placeholder="Search movie..." />
      <Btn type="submit">Search</Btn>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}