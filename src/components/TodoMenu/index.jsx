import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

class TodoMenu extends React.Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail" >
                    <Link to="/">TodoPage</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/finish">DonePage</Link>
                </Menu.Item>
            </Menu>


        )
    }

}
export default TodoMenu