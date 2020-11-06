import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { showErrorMsg } from '../helpers/message';
import isEmpty from 'validator/lib/isEmpty';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState('');
    let [errorMsg, setErrorMsg] = useState('');
    let dispatch = useDispatch();
    return (
        <div>
                <Row className="m-2 text-center">
                    {(errorMsg) && showErrorMsg(errorMsg)}
                </Row>
            <Row className="m-2">
                <input onChange={(e) => {setName(e.target.value);
                                setErrorMsg('');}} value={name} type="text" className="form-control col" />
                <Button onClick={() => {
        if (isEmpty(name)) {
            setErrorMsg('Please enter a todo');
        } else {
                    dispatch(
                    addTodo(
                        {
                            id: uuid(),
                            name: name,
                        }
                ))
                setName('');
                }}} className="mx-2">Add</Button>
            </Row>
        </div>
    )
}

export default TodoInput;

