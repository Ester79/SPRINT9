import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Btn } from '../../styles/styled';

const ModalComponent = props => {
    return (
        <>
            <Modal show={props.showModal} onHide={props.closeModal} animation centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title1}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.textMessage}</Modal.Body>
                <Modal.Footer>
                    <Btn variant='primary' className='btn' onClick={props.confirmButton}>{props.buttonText}</Btn>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent
