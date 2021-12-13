import React, { FC } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { Button } from '@mui/material'

export interface IModalProps {
    isOpen: boolean,
    title: string,
    content: string,
    onClose: () => void
}

const Modal: FC<IModalProps> = ({ isOpen, title, content, onClose }) => {
    return (
        <Dialog open={isOpen}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    color='primary'
                    onClick={onClose}>
                        Close
                    </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
