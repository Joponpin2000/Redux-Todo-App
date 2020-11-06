import React, { useState } from 'react';
import {  Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    return (
        <div>
            <Row className="mx-2 align-items-center">
                <Col>#{todo.id.length > 1 ? todo.id[2] : todo.id}</Col>
                <Col>
                {editable ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder={todo.name}/> : <h4>{todo.name}</h4>}
                    
                </Col>
                <Button onClick={() => {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name,
                        }
                    ))
                    if (editable) {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }} className="m-2">{editable ? "Update" : "Edit"}</Button>
            <Button onClick={() => {dispatch(deleteTodo(todo.id))}} variant="danger" className="m-2">Delete</Button>
            </Row>
        </div>
    )
}

export default TodoItem;

