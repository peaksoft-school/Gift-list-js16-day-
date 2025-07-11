import { Box, styled, TextareaAutosize, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/UI/Button'
import BreadCrumbs from '../../../../components/UI/BreadCrumbs'
import Input from '../../../../components/UI/Input'
import Dropdown from '../../../../components/UI/DropDown'
import { USER_CHARITY_THUNK } from '../../../../store/slices/user/charity/userCharityThunk'
import { FILES_THUNK } from '../../../../store/slices/file/filesThunk'
import { ImageIcon } from 'lucide-react'
import { useNavigate } from 'react-router'

const CreateCharity = () => {
   const { fileUrl, isLoading } = useSelector((state) => state.files)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [preview, setPreview] = useState(null)
   const [formData, setFormData] = useState({
      name: '',
      condition: '',
      category: '',
      subCategory: '',
      description: '',
      file: null,
   })

   const handleChange = (e) => {
      const { name, value, files, type } = e.target

      if (type === 'file') {
         const file = files[0]
         if (!file) return

         const reader = new FileReader()
         reader.onloadend = () => setPreview(reader.result)
         reader.readAsDataURL(file)

         dispatch(FILES_THUNK.addFile({ file }))

         setFormData((prev) => ({
            ...prev,
            [name]: file,
         }))
      } else {
         setFormData((prev) => ({
            ...prev,
            [name]: value,
         }))
      }
   }

   const handleSubmit = () => {
      if (
         !formData.name ||
         !formData.description ||
         !formData.category ||
         !formData.subCategory ||
         !formData.condition ||
         !fileUrl
      ) {
         alert('Пожалуйста, заполните все поля и загрузите изображение.')
         return
      }

      const values = {
         name: formData.name,
         description: formData.description,
         image: fileUrl,
      }

      dispatch(
         USER_CHARITY_THUNK.createCharity({
            values,
            categoryById: formData.category,
            subcategoryId: formData.subCategory,
            status: formData.condition,
            navigate,
         })
      )
   }

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      { href: '/user/charity', label: 'Добавить подарок' },
   ]

   const handleGoBack = () => navigate(-1)

   return (
      <BlockContainer>
         <BreadCrumbs links={links} />
         <FormContainer>
            <Box>
               <label htmlFor="upload-file">
                  <UploadBox preview={preview}>
                     {preview ? (
                        <Box
                           component="img"
                           src={preview}
                           alt="preview"
                           className="photo"
                        />
                     ) : (
                        <>
                           <ImageIcon />
                           <Typography>
                              Нажмите для добавления фотографии
                           </Typography>
                        </>
                     )}
                  </UploadBox>
               </label>

               <input
                  type="file"
                  id="upload-file"
                  accept="image/*"
                  name="file"
                  hidden
                  onChange={handleChange}
               />
            </Box>

            <Box className="content">
               <Typography variant="h6">Добавление вещи</Typography>

               <StyledInputGift>
                  <Box className="input-container">
                     <Box>
                        <Input
                           value={formData.name}
                           name="name"
                           labelText="Название подарка"
                           placeholder="Введите название подарка"
                           onChange={handleChange}
                           className="drop-down"
                        />

                        <Dropdown
                           labelText="Категория"
                           placeholder="Выберите категорию"
                           value={formData.category}
                           name="category"
                           options={categoryOptions}
                           onChange={handleChange}
                           className="drop-down"
                        />
                     </Box>

                     <Box>
                        <Dropdown
                           labelText="Состояние"
                           placeholder="Укажите состояние"
                           value={formData.condition}
                           name="condition"
                           options={conditionOptions}
                           onChange={handleChange}
                           className="drop-down"
                        />

                        <Dropdown
                           labelText="Подкатегория"
                           placeholder="Выберите подкатегорию"
                           value={formData.subCategory}
                           name="subCategory"
                           options={subCategoryOptions}
                           onChange={handleChange}
                           className="drop-down"
                        />
                     </Box>
                  </Box>
               </StyledInputGift>

               <StyledTextField
                  placeholder="Введите описание подарка"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
               />

               <StyledButton>
                  <Button variant="warning" onClick={handleGoBack}>
                     ОТМЕНА
                  </Button>

                  <Button variant="outlined" onClick={handleSubmit}>
                     {isLoading ? 'ЗАГРУЗКА...' : 'ДОБАВИТЬ'}
                  </Button>
               </StyledButton>
            </Box>
         </FormContainer>
      </BlockContainer>
   )
}

export default CreateCharity

// Styled Components

const BlockContainer = styled(Box)(() => ({
   padding: '0 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',
}))

const FormContainer = styled(Box)(() => ({
   display: 'flex',
   borderRadius: '10px',
   width: '100%',
   background: '#ffffff',
   gap: '20px',
   padding: '30px',

   '& .content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
   },
}))

const UploadBox = styled(Box)(({ preview }) => ({
   border: preview !== null ? 'none' : '2px solid #DCDCE4',
   width: '217px',
   height: '217px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
   color: '#8E8EA9',
   margin: 'auto',
   backgroundColor: '#F6F6F9',
   borderRadius: '8px',

   '&:hover': {
      backgroundColor: preview !== null ? 'none' : '#DCDCE4',
   },

   '& .MuiTypography-root': {
      fontSize: '12px',
      width: '150px',
      textAlign: 'center',
   },

   '& .photo': {
      width: '217px',
      height: '217px',
      borderRadius: '8px',
      objectFit: 'cover',
   },
}))

const StyledInputGift = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',

   '& .input-container': {
      display: 'flex',
      gap: '20px',

      '& > .MuiBox-root': {
         display: 'flex',
         flexDirection: 'column',
         gap: '20px',
      },

      '& .drop-down': {
         width: '396px',
      },
   },
}))

const StyledTextField = styled(TextareaAutosize)(() => ({
   width: '810px',
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
}))

const StyledButton = styled(Box)(() => ({
   marginTop: '20px',
   display: 'flex',
   gap: '20px',
   justifyContent: 'end',
   marginRight: '78px',
}))
