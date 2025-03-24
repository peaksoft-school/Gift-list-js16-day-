import Button from './components/UI/Button'

const App = () => {
   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px',
         }}
      >
         <Button name="ВОЙТИ" variant="primary">
            Войти
         </Button>

         <Button name="+ Добавить подарок" variant="secondary">
            +Добавть подарок
         </Button>

         <Button name="ОТМЕНА" variant="disabled">
            Отмена
         </Button>
      </div>
   )
}

export default App


