import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-3'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'The Water',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(6, 'days').valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(expense));
});

test('should edit an expense by id', () => {
  const expense = {
    id: '3',
    description: 'The Water',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(6, 'days').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: expense
  }
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual(expense);
});

test('should not edit an expense by id if not found', () => {
  const expense = {
    id: '3',
    description: 'The Water',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(6, 'days').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '',
    updates: expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});