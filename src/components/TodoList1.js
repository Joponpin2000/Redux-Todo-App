import React, { Fragment } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Table } from 'react-bootstrap';
import { useState } from 'react';

function TodoList() {
    const [todo, setTodo] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [showModal, setShowModal] = useState(false);

    const list = useSelector(state => state.todoList);
    console.log(list)

    const dispatch = useDispatch();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleAddTodo = (evt) => {
        evt.preventDefault();

        if (isEmpty(todo)) {
            setErrorMsg('Please enter a todo');
        } else {
            // dispatch(addTodo(todo));
        }
    }

    // const handleRemoveTodo = (item) => {
    //     dispatch(removeTodo(item));
    // }

    // const handleDeleteAllTodo = (item) => {
    //     dispatch(deleteAllTodo());
    // }

    const showActionButtons = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <Button onClick={handleShowModal} variant="outline-info" className="btn-block">Add Todo</Button>
                    </div>
                    <div className="col-md-4 my-1">
                        <Button variant="outline-danger" className="btn-block">Delete All</Button>
                    </div>
                </div>
            </div>
        </div >
    )

    const showCategoryModal = () => (
        <Modal animation={false} show={showModal} onHide={handleCloseModal} >
            <form onSubmit={handleAddTodo}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(errorMsg) && showErrorMsg(errorMsg)}
                    {(successMsg) && showSuccessMsg(successMsg)}
                    {(
                        <Fragment>
                            <label className="text-secondary">Todo</label>
                            <input type="text" className="form-control" name="todo" onChange={(e) => {
                                setTodo(e.target.value);
                                setErrorMsg('');
                                setSuccessMsg('');
                            }} />
                        </Fragment>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <Button type="submit">Submit</Button>
                </Modal.Footer>
            </form>
        </Modal>
    )

    const showTodoList = () => (
        <Fragment>
            <h3>Products</h3>
            <Table striped bordered hover>
                <thead><tr>
                    <th>#</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
                </thead>
                {list ? <tbody>
                    {list.map((item, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item}</td>
                            <td>
                                <Button variant="warning">Edit</Button>
                                {' '}
                                {/* <Button onClick={() => handleRemoveTodo(item)} variant="danger" >Delete</Button> */}
                            </td>
                        </tr>
                    )
                    )
                    }
                </tbody>
                    : <tbody></tbody>
                }

            </Table>
        </Fragment>
    )
    return (
        <Fragment>
            {showActionButtons()}
            {showCategoryModal()}
            {showTodoList()}
        </Fragment>
    )
}

export default TodoList;