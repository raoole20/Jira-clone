import { Modal, styled, lighten, Paper } from "@mui/material"
import { closeModal, RootState } from "app/store"
import { useDispatch, useSelector } from "react-redux"

export const ModalCustom = ({ children }: any) => {
    const {openModal} = useSelector((state: RootState) => state.app)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeModal())
    }

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalContainer>
               {
                children
               }
            </ModalContainer>
        </Modal>
    )
}

const ModalContainer = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: lighten(theme.palette.background.paper, 0),
    border: 'none',
    boxShadow: theme.shadows[4],
    padding: theme.spacing(4, 2),
}))
