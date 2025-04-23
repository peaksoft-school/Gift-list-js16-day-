import styled from 'styled-components'

const MainHeaderPage = () => {
   return (
      <MainHeader>
         <a href="#">О проекте</a>
         <h3>GIFT LIST</h3>
         <a href="#">Благотворительность</a>
      </MainHeader>
   )
}

export default MainHeaderPage

const MainHeader = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '25px 60px',
   a: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '16px',
   },
   h3: {
      fontWeight: 700,
      fontSize: '24px',
      marginLeft: '50px',
   },
})
