import { Backdrop, Box, Modal as MuiModal, Fade } from '@mui/material'

const Modal = ({ open, onClose, children }) => (
   <MuiModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
         backdrop: {
            timeout: 500,
         },
      }}
   >
      <Fade in={open}>
         <Box sx={style}>
            <Box>{children}</Box>
         </Box>
      </Fade>
   </MuiModal>
)

export default Modal

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '544px',
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
   borderRadius: '12px',
}
