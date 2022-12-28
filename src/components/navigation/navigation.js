import { UITitle, UIP } from 'biuty/react';
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <>
        <div className='navbar-links-container'>
          <Link to="/"><UITitle label="Home" /></Link>
          <Link to="/mixins"><UITitle label="Mixins" /></Link>
          <Link to="/suggestions"><UITitle label="Suggestions" /></Link>
          <Link to="/media-queries"><UITitle label="Media Queries" /></Link>

        </div>
    </>
  )
}

export default Navigation;