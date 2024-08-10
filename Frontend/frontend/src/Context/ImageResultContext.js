import React from 'react'; 
  
const ImageResultContext =React.createContext(); 
  
export const Provider = ImageResultContext.Provider; 
export const Consumer = ImageResultContext.Consumer;
export default ImageResultContext;