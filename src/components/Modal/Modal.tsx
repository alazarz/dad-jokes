import React, { FC } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { Button } from '@mui/material'
import { IModalProps } from '../../interfaces/'

const Modal: FC<IModalProps> = ({ isOpen, content, onClose }) => {
    return (
        <Dialog open={isOpen}>
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
