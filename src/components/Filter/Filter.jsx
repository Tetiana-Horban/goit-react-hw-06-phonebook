import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/actions';
import { FilterInput, TextFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => dispatch(changeFilter(event.target.value));
  return (
    <FilterInput>
      <label>
        <TextFilter>Find contacts by name</TextFilter>
        <br />
        <InputFilter type="text" onChange={onChange} />
      </label>
    </FilterInput>
  );
};

export default Filter;
