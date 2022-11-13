import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth.js';

const Header = () => {

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleClick = () => {
    dispatch(authActions.logout())
  }

  return ( 
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated ? <li>
            <a href='/'>My Products</a>
          </li> : null}
          {isAuthenticated ? <li>
            <a href='/'>My Sales</a>
          </li> : null}
          {isAuthenticated ? <li>
            <button onClick={handleClick}>Logout</button>
          </li> : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
