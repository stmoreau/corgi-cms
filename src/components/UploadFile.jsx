import React from 'react';
import { useDropzone } from 'react-dropzone';
import AppNavigationButton from './AppNavigationButton';

const UploadFile = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <AppNavigationButton
        text="Import JSON"
        type="secondary"
        handleClick={() => {}}
      />
    </div>
  );
};

export default UploadFile;
