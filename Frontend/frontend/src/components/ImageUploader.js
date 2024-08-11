import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
// import './ImageUploader.css'; // Assume you have some basic styles here

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const handleSubmit=()=>{
    
  }

  return (
    <>
    <div className='imageuploder'>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={['jpg', 'png', 'jpeg']}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {imageList.length === 0 ? (
              <button
                className="upload-btn"
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop Here
              </button>
            ) : (
              imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                    <button onClick={() => onImageRemove(index)  }className="image-item__btn-wrapper">Remove</button>

                </div>
              ))
            )}
          </div>
        )}
      </ImageUploading>
    </div>
    {/* <div className='btn-submit'>
        <button className='btn-submit' onClick={handleSubmit}>Submit</button>
    </div> */}
    </>
  );
};
export default ImageUploader;
