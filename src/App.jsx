import toastifyNotify from './utils/helpers/ToastifyNotify'

const App = () => (
   <>
      <button
         onClick={() =>
            toastifyNotify({
               title: 'great',
               message: 'asdasdf',
               autoClose: 3000,
               type: 'success',
            })
         }
      >
         Click
      </button>
      GIFT-LIST JS-16 DAY
   </>
)

export default App
