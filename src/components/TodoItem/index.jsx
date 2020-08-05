import React, { Fragment } from 'react'
import { updateTodo, deleteTodo } from '../../api'
import { Button, Row, Col } from 'antd'

class TodoItem extends React.Component {

    onDelete = () => {
        deleteTodo(this.props.item.id).then(response => {
            alert('Delete Success!')
            this.props.deleteTodoAction(this.props.item.id)
        }).catch(response => {
            alert('This item is not exist!')
            this.props.deleteTodoAction(this.props.item.id)
        })
    }

    onMark = () => {
        this.props.markTodoAction(this.props.item.id)
        updateTodo(this.props.item.id, { "status": !this.props.item.status })
    }

    render() {
        return (
                <Row style={{width: '38%', height: '40px', margin: '-1px auto',border:'1px solid #CCCCCC'}} justify='center' align='middle'>
                    <Col span={20}><span style={{ textDecorationLine: this.props.item.status ? "line-through" : "none" }}
                        onClick={this.onMark}>{this.props.item.content}</span></Col>
                    <Col span={4}><Button type="primary" onClick={this.onDelete} danger>X</Button></Col>
                </Row>
        )
    }
}

export default TodoItem