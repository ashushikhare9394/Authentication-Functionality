// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="list-item">
      <Link to="/">
        <li className="list-about">Home</li>
      </Link>
      <Link to="/about">
        <li className="list-about">About</li>
      </Link>
    </ul>
  </nav>
)
export default withRouter(Header)
