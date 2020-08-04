import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">TodoPage</Link><span> | </span>
                <Link to="/finish">DonePage</Link>
            </div>
        )
    }

}
export default Menu