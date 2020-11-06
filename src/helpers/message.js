import React from 'react';
import { Col } from 'react-bootstrap';


export const showErrorMsg = msg => (
    <Col className="alert alert-danger" role="alert" >
        {msg}
    </Col >
);

export const showSuccessMsg = msg => (
    <Col className="alert alert-success" role="alert">
        {msg}
    </Col>
);