import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled, TextareaAutosize } from '@mui/material'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { WISH_THUNK } from '../../store/slices/user/wish/wishThunk'
import Dropdown from '../UI/Dropdown'

const WishList = () => {
   const dispatch = useDispatch()
   const holidays = useSelector((state) => state.wish?.holidays ?? [])
   const { isLoading, error } = useSelector((state) => state.wish ?? {})

   const [customHolidays, setCustomHolidays] = useState(() => {
      const stored = localStorage.getItem('customHolidays')
      return stored ? JSON.parse(stored) : []
   })

   const allHolidays = [...holidays, ...customHolidays]

   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
      watch,
   } = useForm({
      defaultValues: {
         name: '',
         image: '',
         link: '',
         holidayId: '',
         holidayDate: '',
         description: '',
      },
   })

   const [imagePreview, setImagePreview] = useState(null)
   const imageValue = watch('image')

   const onFileChange = (e) => {
      const file = e.target.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onloadend = () => {
         setValue('image', reader.result, { shouldValidate: true })
         setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
   }

   const onSubmit = async (data) => {
      const result = await dispatch(
         WISH_THUNK.addWish({
            ...data,
            holidayId: Number(data.holidayId),
         })
      )
      if (WISH_THUNK.addWish.fulfilled.match(result)) {
         reset()
         setImagePreview(null)
      }
   }

   useEffect(() => {
      dispatch(WISH_THUNK.getHolidays())
   }, [dispatch])

   const handleHolidayChange = (value, field) => {
      if (value === 'new') {
         const name = prompt('Введите название нового праздника')
         if (name?.trim()) {
            const newHoliday = { id: Date.now(), name }
            const updated = [...customHolidays, newHoliday]
            setCustomHolidays(updated)
            localStorage.setItem('customHolidays', JSON.stringify(updated))
            setValue('holidayId', newHoliday.id, { shouldValidate: true })
         } else {
            setValue('holidayId', '', { shouldValidate: true })
         }
      } else {
         field.onChange(value)
      }
   }

   const holidayOptions = [
      ...allHolidays.map((h) => ({ id: h.id, title: h.name })),
      { id: 'new', title: '+ Создать новый праздник' },
   ]

   const nameValue = watch('name')
   const holidayIdValue = watch('holidayId')
   const holidayDateValue = watch('holidayDate')
   const descriptionValue = watch('description')

   const isSubmitDisabled =
      !nameValue ||
      !holidayIdValue ||
      !holidayDateValue ||
      !imageValue ||
      !descriptionValue ||
      isLoading

   return (
      <MainStyled>
         <Title>Список желаний</Title>
         <form onSubmit={handleSubmit(onSubmit)}>
            <ImageUpload>
               <ImageLabel htmlFor="upload-photo">
                  {imagePreview ? (
                     <PreviewImage src={imagePreview} alt="Фото" />
                  ) : (
                     <>
                        <ImageIcon>+</ImageIcon>
                        <ImageText>Добавить фото</ImageText>
                     </>
                  )}
                  <input
                     type="file"
                     id="upload-photo"
                     style={{ display: 'none' }}
                     accept="image/*"
                     onChange={onFileChange}
                  />
               </ImageLabel>
            </ImageUpload>

            <Box className="content">
               <FormTitle>Добавление подарка</FormTitle>

               <Box className="first-block">
                  <Controller
                     name="name"
                     control={control}
                     rules={{ required: 'Введите название' }}
                     render={({ field }) => (
                        <InputStyled
                           {...field}
                           placeholder="Название подарка"
                           labelText="Название"
                           error={!!errors.name}
                           helperText={errors.name?.message}
                        />
                     )}
                  />
                  <Controller
                     name="link"
                     control={control}
                     render={({ field }) => (
                        <InputStyled
                           {...field}
                           placeholder="Ссылка на подарок"
                           labelText="Ссылка"
                        />
                     )}
                  />
               </Box>

               <Box className="first-block">
                  <Controller
                     name="holidayId"
                     control={control}
                     rules={{ required: 'Выберите праздник' }}
                     render={({ field }) => (
                        <Dropdown
                           options={holidayOptions}
                           value={field.value}
                           onChange={(e) =>
                              handleHolidayChange(e.target.value, field)
                           }
                           placeholder="Выберите праздник"
                           labelText="Праздник"
                        />
                     )}
                  />
                  {errors.holidayId && (
                     <ErrorText>{errors.holidayId.message}</ErrorText>
                  )}

                  <Controller
                     name="holidayDate"
                     control={control}
                     rules={{ required: 'Укажите дату' }}
                     render={({ field }) => (
                        <InputStyled
                           {...field}
                           type="date" // вот тут
                           placeholder="Дата праздника"
                           labelText="Дата праздника"
                           error={!!errors.holidayDate}
                           helperText={errors.holidayDate?.message}
                        />
                     )}
                  />
               </Box>

               <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                     <DescriptionInput
                        {...field}
                        rows={4}
                        placeholder="Описание подарка"
                     />
                  )}
               />

               {error && <ErrorText>{error}</ErrorText>}

               <ButtonRow>
                  <Button
                     variant="warning"
                     type="button"
                     onClick={() => {
                        reset()
                        setImagePreview(null)
                     }}
                     disabled={isLoading}
                  >
                     ОТМЕНА
                  </Button>
                  <Button
                     variant="outlined"
                     type="submit"
                     disabled={isSubmitDisabled}
                  >
                     {isLoading ? 'СОХРАНЕНИЕ...' : 'ДОБАВИТЬ'}
                  </Button>
               </ButtonRow>
            </Box>
         </form>
      </MainStyled>
   )
}

export default WishList

// СТИЛИ
const MainStyled = styled('div')({
   padding: '32px',
   background: '#fafbfc',
   minHeight: '100vh',

   '& form': {
      display: 'flex',
      gap: '2rem',

      '& .content': {
         display: 'flex',
         flexDirection: 'column',
         gap: '1rem',

         '& .first-block': {
            display: 'flex',
            gap: '1.5rem',
         },
      },
   },
})

const Title = styled('h2')({
   fontWeight: 700,
   fontSize: '20px',
   marginBottom: '24px',
})

const FormWrapper = styled('form')({
   display: 'flex',
   gap: '32px',
   alignItems: 'flex-start',
})

const ImageUpload = styled('div')({
   width: '160px',
   height: '160px',
   background: '#f3f4f8',
   borderRadius: '12px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: '1px dashed #cfd8dc',
   overflow: 'hidden',
})

const ImageLabel = styled('label')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   cursor: 'pointer',
   width: '100%',
   height: '100%',
})

const ImageIcon = styled('div')({
   fontSize: '32px',
   color: '#b0b7c3',
   marginBottom: '8px',
})

const ImageText = styled('span')({
   color: '#b0b7c3',
   fontSize: '14px',
   textAlign: 'center',
})

const PreviewImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   borderRadius: 12,
})

const FormFields = styled('div')({
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})

const FormTitle = styled('div')({
   fontWeight: 600,
   fontSize: '16px',
   marginBottom: '8px',
})

const Row = styled('div')({
   display: 'flex',
   gap: '16px',
   alignItems: 'center',
})

const InputStyled = styled(Input)({
   flex: 1,
   color: '#9fa0a2',
})

const SelectStyled = styled('select')({
   flex: 1,
   padding: '10px',
   borderRadius: '6px',
   border: '1px solid #e0e3e6',
   fontSize: '14px',
   background: '#fff',
})

const DescriptionInput = styled(TextareaAutosize)({
   width: '100%',
   height: '111px !important',
   borderRadius: '6px',
   padding: '8px 18px',
   border: '1px solid #BDBDBD',
   color: '#8D949E',
   fontSize: '16px',
   fontWeight: 300,
   fontFamily: 'Inter',

   '&:focus': {
      outline: 'none',
      borderColor: '#BDBDBD',
      boxShadow: 'none',
   },

   '&:hover': {
      borderColor: '#BDBDBD',
   },

   '&::placeholder': {
      color: '#8D949E',
      fontWeight: 300,
   },
})

const ButtonRow = styled('div')({
   display: 'flex',
   gap: '16px',
   justifyContent: 'flex-end',
   marginTop: '16px',
})

const ErrorText = styled('span')({
   color: 'red',
   fontSize: '12px',
   marginLeft: 8,
   alignSelf: 'flex-start',
})
