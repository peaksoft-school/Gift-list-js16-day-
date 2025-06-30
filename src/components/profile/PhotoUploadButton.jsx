import { useState } from 'react'
import { ImageIcon, X } from 'lucide-react'

const PhotoUploadButton = () => {
   const [selectedImage, setSelectedImage] = useState(null)
   const [isDragOver, setIsDragOver] = useState(false)

   const handleImageChange = (event) => {
      const file = event.target.files[0]
      if (file) {
         processFile(file)
      }
   }

   const processFile = (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
         setSelectedImage(e.target.result)
      }
      reader.readAsDataURL(file)
   }

   const handleRemoveImage = () => {
      setSelectedImage(null)
   }

   const handleDragOver = (e) => {
      e.preventDefault()
      setIsDragOver(true)
   }

   const handleDragLeave = (e) => {
      e.preventDefault()
      setIsDragOver(false)
   }

   const handleDrop = (e) => {
      e.preventDefault()
      setIsDragOver(false)
      const files = e.dataTransfer.files
      if (files.length > 0 && files[0].type.startsWith('image/')) {
         processFile(files[0])
      }
   }

   return (
      <div style={containerStyle}>
         <div style={wrapperStyle}>
            <input
               type="file"
               accept="image/*"
               onChange={handleImageChange}
               style={{ display: 'none' }}
               id="photo-input"
            />

            {!selectedImage ? (
               <label
                  htmlFor="photo-input"
                  style={uploadAreaStyle}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onMouseEnter={(e) => {
                     e.target.style.backgroundColor = '#eeeeee'
                  }}
                  onMouseLeave={(e) => {
                     if (!isDragOver) {
                        e.target.style.backgroundColor = '#fafafa'
                     }
                  }}
               >
                  <div style={uploadContentStyle}>
                     <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={iconStyle}
                     >
                        <rect
                           x="3"
                           y="3"
                           width="18"
                           height="18"
                           rx="2"
                           ry="2"
                        />
                        <circle cx="9" cy="9" r="2" />
                        <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
                     </svg>
                     <p style={textStyle}>
                        добавить или перетащите
                        <br />
                        фотографию
                     </p>
                  </div>
               </label>
            ) : (
               <div style={imageContainerStyle}>
                  <img
                     src={selectedImage}
                     alt="Загруженное фото"
                     style={imageStyle}
                  />
                  <button
                     onClick={handleRemoveImage}
                     style={removeButtonStyle}
                     onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#d32f2f'
                     }}
                     onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#f44336'
                     }}
                  >
                     <X style={{ width: '16px', height: '16px' }} />
                  </button>
                  <label
                     htmlFor="photo-input"
                     style={overlayStyle}
                     onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
                        e.target.querySelector('span').style.opacity = '1'
                     }}
                     onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.querySelector('span').style.opacity = '0'
                     }}
                  >
                     <span style={overlayTextStyle}>Изменить</span>
                  </label>
               </div>
            )}
         </div>
      </div>
   )
}

export default PhotoUploadButton
const containerStyle = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   minHeight: '100vh',
   backgroundColor: '#f5f5f5',
   padding: '16px',
}

const wrapperStyle = {
      width: '100%',
      maxWidth: '320px',
}

const uploadAreaStyle = {
      display: 'block',
      width: '100%',
   height: '192px',
   borderRadius: '8px',
   cursor: 'pointer',
   transition: 'all 0.2s ease',
   textDecoration: 'none',
}

const uploadContentStyle = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   height: '100%',
   padding: '24px',
}

const iconStyle = {
   width: '48px',
   height: '48px',
   marginBottom: '12px',
   color: 'rgba(0, 0, 0, 0.38)',
}

const textStyle = {
   fontSize: '14px',
   color: 'rgba(0, 0, 0, 0.6)',
   textAlign: 'center',
   lineHeight: '1.4',
   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
}

const imageContainerStyle = {
   position: 'relative',
   width: '100%',
   height: '192px',
   borderRadius: '8px',
   overflow: 'hidden',
}

const imageStyle = {
   width: '100%',
   height: '100%',
   objectFit: 'cover',
}

const removeButtonStyle = {
   position: 'absolute',
   top: '8px',
   right: '8px',
   width: '24px',
   height: '24px',
   backgroundColor: '#f44336',
   color: 'white',
   border: 'none',
   borderRadius: '50%',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   transition: 'background-color 0.2s ease',
}

const overlayStyle = {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backgroundColor: 'transparent',
   cursor: 'pointer',
   transition: 'background-color 0.2s ease',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}

const overlayTextStyle = {
   color: 'white',
   fontSize: '14px',
   fontWeight: 500,
   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
   opacity: 0,
   transition: 'opacity 0.2s ease',
}
