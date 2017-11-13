import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
  const text = "This works"
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text });
  expect(state.text).toBe("This works");
});

test('should setup startDate filter', () => {
  const date = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: date
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(date);
});

test('should setup endDate filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toEqual(date);
});