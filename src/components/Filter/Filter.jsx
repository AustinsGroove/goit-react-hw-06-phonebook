import { useSelector, useDispatch } from 'react-redux';
import Wrapper from './Filter.styled';
import { filterChange } from 'store/sliceFilter/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  const filterChangeHandler = ev => {
    dispatch(filterChange(ev.target.value));
  };

  return (
    <Wrapper>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterChangeHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </Wrapper>
  );
};

export default Filter;
