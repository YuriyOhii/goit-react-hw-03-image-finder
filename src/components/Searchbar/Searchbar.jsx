import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { LuSearch } from 'react-icons/lu';

export const Searchbar = props => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormBtn type="submit">
          <span>
            <LuSearch/>
          </span>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {};
