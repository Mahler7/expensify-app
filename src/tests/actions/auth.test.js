import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const action = login('321cba');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '321cba'
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});