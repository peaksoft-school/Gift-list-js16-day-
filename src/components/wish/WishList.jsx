import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { WISH_THUNK } from '../../store/wish/wishThunk'

const WishList = () => {
   const dispatch = useDispatch()
   const { isLoading, error } = useSelector((state) => state.wish)

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
         link: '',
         holidayName: '',
         holidayDate: '',
         description: '',
         image: '',
      },
   })

   const [imagePreview, setImagePreview] = useState(null)
   const imageValue = watch('image')

   const onFileChange = (e) => {
      const file = e.target.files[0]
      if (!file) return

      const reader = new FileReader()
      reader.onloadend = () => {
         setValue('image', reader.result, { shouldValidate: true })
         setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
   }

   const onSubmit = async (data) => {
      const { image, ...rest } = data
      const resultAction = await dispatch(WISH_THUNK.addWish({ values: rest }))
   }

   return (
      <MainStyled>
         <Title>Список желаний</Title>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <ImageUpload>
               <ImageLabel htmlFor="upload-photo">
                  {imagePreview ? (
                     <img
                        src={imagePreview}
                        alt="Выбранное фото"
                        style={{
                           width: '100%',
                           height: '100%',
                           borderRadius: 12,
                           objectFit: 'cover',
                        }}
                     />
                  ) : (
                     <>
                        <ImageIcon>+</ImageIcon>
                        <ImageText>Нажмите для добавления фотографии</ImageText>
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

            <FormFields>
               <FormTitle>Добавление желаемого подарка</FormTitle>

               <Row>
                  <Controller
                     name="name"
                     control={control}
                     rules={{ required: 'Введите название подарка' }}
                     render={({ field }) => (
                        <InputStyled
                           {...field}
                           placeholder="Введите название подарка"
                           label="Название подарка"
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
                           placeholder="Вставьте ссылку на подарок"
                           label="Ссылка на подарок"
                        />
                     )}
                  />
               </Row>

               <Row>
                  <Controller
                     name="holidayName"
                     control={control}
                     rules={{ required: 'Выберите праздник' }}
                     render={({ field }) => (
                        <SelectStyled {...field}>
                           <option value="">Выберите праздник</option>
                           <option value="День рождения">День рождения</option>
                           <option value="Новый год">Новый год</option>
                           <option value="8 марта">8 марта</option>
                        </SelectStyled>
                     )}
                  />
                  <Controller
                     name="holidayDate"
                     control={control}
                     rules={{ required: 'Укажите дату праздника' }}
                     render={({ field }) => (
                        <InputStyled
                           {...field}
                           // type="date"
                           placeholder="Укажите дату праздника"
                           label="Дата праздника"
                           error={!!errors.holidayDate}
                           helperText={errors.holidayDate?.message}
                        />
                     )}
                  />
               </Row>
               {errors.holidayName && (
                  <ErrorText>{errors.holidayName.message}</ErrorText>
               )}

               <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                     <DescriptionInput
                        {...field}
                        placeholder="Введите описание подарка"
                        rows={4}
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
                        dispatch(clearError())
                     }}
                     disabled={isLoading}
                  >
                     ОТМЕНА
                  </Button>
                  <Button variant="outlined" type="submit" disabled={isLoading}>
                     {isLoading ? 'СОХРАНЕНИЕ...' : 'ДОБАВИТЬ'}
                  </Button>
               </ButtonRow>
            </FormFields>
         </FormWrapper>
      </MainStyled>
   )
}

export default WishList

// Стили (можно использовать ваши из предыдущих примеров)

const MainStyled = styled('div')({
   padding: '32px',
   background: '#fafbfc',
   minHeight: '100vh',
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
})

const SelectStyled = styled('select')({
   flex: 1,
   padding: '10px',
   borderRadius: '6px',
   border: '1px solid #e0e3e6',
   fontSize: '14px',
   background: '#fff',
})

const DescriptionInput = styled('textarea')({
   width: '100%',
   padding: '12px',
   borderRadius: '6px',
   border: '1px solid #e0e3e6',
   fontSize: '14px',
   resize: 'vertical',
   minHeight: '80px',
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
