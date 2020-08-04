import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../../action'

class Input extends React.Component {

    onSummit = () => {
        if (this.input.value === "") {
            alert('Input content is empty')
            return
        }
        this.props.addTodoAction(this.input.value)
        this.input.value = "";
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input} />
                <button onClick={this.onSummit.bind(this)}>提交</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addTodoAction
}


export default connect(null, mapDispatchToProps)(Input)