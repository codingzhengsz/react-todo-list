import React from 'react'

class Input extends React.Component {
    onSummit = () => {
        this.props.addTodoAction(this.input.value)
        this.input.value = "";
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input}/>
                <button onClick={this.onSummit.bind(this)}>提交</button>
            </div>
        )
    }
}

export default Input