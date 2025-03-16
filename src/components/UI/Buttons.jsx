import { Box, Button, Stack } from '@mui/material'
import { Fragment } from 'react'
import styled from 'styled-components'

export default function ButtonsDemo() {
   return (
      <StyledFragment>
         <Box
            sx={{
               border: '2px dashed #aaa',
               maxWidth: '300px',
               padding: '20px',
            }}
         >
            <Stack spacing={2} width="250px">
               <Button variant="contained" sx={{ backgroundColor: '#E53935' }}>
                 
                  ВОЙТИ
               </Button>
               <Button variant="contained" sx={{ backgroundColor: '#86201e' }}>
                  ВОЙТИ
               </Button>
               <Button variant="contained" sx={{ backgroundColor: '#9f302e' }}>
                
                  ВОЙТИ
               </Button>
               <Button variant="contained" disabled>
                  ВОЙТИ
               </Button>
            </Stack>
         </Box>

         {/* Фиолетовые кнопки */}
         <Box
            sx={{
               border: '2px dashed #aaa',
               maxWidth: '300px',
               padding: '20px',
            }}
         >
            <Stack spacing={2} width="250px">
               <Button variant="contained" sx={{ backgroundColor: '#6A0DAD' }}>
                 
                  + Добавить подарок
               </Button>
               <Button variant="contained" sx={{ backgroundColor: '#411163' }}>
                 
                  + Добавить подарок
               </Button>
               <Button variant="contained" sx={{ backgroundColor: '#812bbe' }}>
                 
                  + Добавить подарок
               </Button>
               <Button variant="contained" disabled>
                  + Добавить подарок
               </Button>
            </Stack>
         </Box>

         {/* Отмена кнопки */}
         <Box
            sx={{
               border: '2px dashed #aaa',
               maxWidth: '300px',
               padding: '20px',
            }}
         >
            <Stack spacing={2} width="250px">
               <Button
                  variant="outlined"
                  sx={{
                     backgroundColor: 'transparent',
                     borderColor: 'black',
                     color: 'black',
                  }}
               >
                  ОТМЕНА
               </Button>
               <Button
                  variant="contained"
                  sx={{ backgroundColor: '#3b1258', color: 'white' }}
               >
                  ОТМЕНА
               </Button>
               <Button
                  variant="contained"
                  sx={{ backgroundColor: '#5c2187', color: 'white' }}
               >
                  ОТМЕНА
               </Button>
               <Button variant="outlined" disabled>
                  ОТМЕНА
               </Button>
            </Stack>
         </Box>
      </StyledFragment>
   )
}

const StyledFragment = styled.div`
   display: flex;
   justify-content: space-around;
   padding-top: 50px;
`
