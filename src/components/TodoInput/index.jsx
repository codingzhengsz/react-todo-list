import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../../action'
import { addTodo } from '../../api'
import { Button, Input } from 'antd';


class TodoInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    inputTodo = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onSummit = () => {
        if (this.state.value === "") {
            alert('Input content is empty')
            return
        }
        addTodo({ "content": this.state.value, "status": false }).then(response => {
            this.props.addTodoAction(response.data)
        })
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <div>
                <Input type="text" style={{ width: '30%' }} onChange={this.inputTodo} value={this.state.value} />
                <Button type="primary" onClick={this.onSummit}>Submit</Button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addTodoAction
}


export default connect(null, mapDispatchToProps)(TodoInput)