import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../UI/Button'
import { WISH_THUNK } from '../../store/wish/wishThunk'

const EditWish = ({ wish, onClose }) => {
   const dispatch = useDispatch()
   const { holidays, isLoading } = useSelector((state) => state.wish || {})

   const [formData, setFormData] = useState({
      name: wish?.name || '',
      description: wish?.description || '',
      image: wish?.image || '',
      link: wish?.link || '',
      holidayName: wish?.holidayName || '',
      holidayDate: wish?.holidayDate || '',
   })

   useEffect(() => {
      dispatch(WISH_THUNK.getHolidays())
   }, [dispatch])

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         await dispatch(
            WISH_THUNK.updateWish({
               wishId: wish.id,
               wishData: formData,
            })
         ).unwrap()
         onClose()
      } catch (error) {
         console.error('Ошибка при обновлении желания:', error)
      }
   }

   return (
      <ModalOverlay>
         <ModalContent>
            <ModalHeader>
               <ModalTitle>Редактировать желание</ModalTitle>
               <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>

            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <Label htmlFor="name">Название желания *</Label>
                  <Input
                     id="name"
                     name="name"
                     type="text"
                     value={formData.name}
                     onChange={handleInputChange}
                     required
                     placeholder="Введите название желания"
                  />
               </FormGroup>

               <FormGroup>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                     id="description"
                     name="description"
                     value={formData.description}
                     onChange={handleInputChange}
                     placeholder="Опишите ваше желание"
                     rows={3}
                  />
               </FormGroup>

               <FormGroup>
                  <Label htmlFor="image">Изображение (URL)</Label>
                  <Input
                     id="image"
                     name="image"
                     type="url"
                     value={formData.image}
                     onChange={handleInputChange}
                     placeholder="Ссылка на изображение"
                  />
               </FormGroup>

               <FormGroup>
                  <Label htmlFor="link">Ссылка на товар</Label>
                  <Input
                     id="link"
                     name="link"
                     type="url"
                     value={formData.link}
                     onChange={handleInputChange}
                     placeholder="Ссылка где можно купить"
                  />
               </FormGroup>

               <FormRow>
                  <FormGroup>
                     <Label htmlFor="holidayName">Праздник</Label>
                     <Select
                        id="holidayName"
                        name="holidayName"
                        value={formData.holidayName}
                        onChange={handleInputChange}
                     >
                        <option value="">Выберите праздник</option>
                        {holidays.map((holiday) => (
                           <option key={holiday.id} value={holiday.name}>
                              {holiday.name}
                           </option>
                        ))}
                     </Select>
                  </FormGroup>

                  <FormGroup>
                     <Label htmlFor="holidayDate">Дата праздника</Label>
                     <Input
                        id="holidayDate"
                        name="holidayDate"
                        type="date"
                        value={formData.holidayDate}
                        onChange={handleInputChange}
                     />
                  </FormGroup>
               </FormRow>

               <ButtonRow>
                  <Button type="button" variant="outlined" onClick={onClose}>
                     Отмена
                  </Button>
                  <Button
                     type="submit"
                     variant="contained"
                     disabled={isLoading || !formData.name.trim()}
                  >
                     {isLoading ? 'Сохранение...' : 'Сохранить'}
                  </Button>
               </ButtonRow>
            </Form>
         </ModalContent>
      </ModalOverlay>
   )
}

export default EditWish

// Styles
const ModalOverlay = styled('div')({
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   zIndex: 1000,
})

const ModalContent = styled('div')({
   backgroundColor: '#fff',
   borderRadius: '12px',
   padding: '24px',
   width: '90%',
   maxWidth: '600px',
   maxHeight: '90vh',
   overflow: 'auto',
})

const ModalHeader = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '24px',
})

const ModalTitle = styled('h2')({
   margin: 0,
   fontSize: '20px',
   fontWeight: 600,
})

const CloseButton = styled('button')({
   background: 'none',
   border: 'none',
   fontSize: '24px',
   cursor: 'pointer',
   padding: '4px',
   color: '#666',
   '&:hover': {
      color: '#333',
   },
})

const Form = styled('form')({
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})

const FormGroup = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
})

const FormRow = styled('div')({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '16px',
   '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
   },
})

const Label = styled('label')({
   fontSize: '14px',
   fontWeight: 500,
   color: '#333',
})

const Input = styled('input')({
   padding: '12px',
   border: '1px solid #ddd',
   borderRadius: '8px',
   fontSize: '14px',
   '&:focus': {
      outline: 'none',
      borderColor: '#2196f3',
   },
})

const Textarea = styled('textarea')({
   padding: '12px',
   border: '1px solid #ddd',
   borderRadius: '8px',
   fontSize: '14px',
   resize: 'vertical',
   fontFamily: 'inherit',
   '&:focus': {
      outline: 'none',
      borderColor: '#2196f3',
   },
})

const Select = styled('select')({
   padding: '12px',
   border: '1px solid #ddd',
   borderRadius: '8px',
   fontSize: '14px',
   backgroundColor: '#fff',
   '&:focus': {
      outline: 'none',
      borderColor: '#2196f3',
   },
})

const ButtonRow = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '12px',
   marginTop: '24px',
})
