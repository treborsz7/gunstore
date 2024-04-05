import React, { ChangeEvent, useState } from 'react';
import * as  DaoService from "../../../../Services/DaoService";
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const filesBaseUrl = 'http://localhost:3001/api/files/'

const FileUploadMultiple = () => {
  const [files, setFiles] = useState([])

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const formData = new FormData();
  //   formData.append("selectedFile", selectedFile);
  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: "/api/files/",
  //       body: formData,
  //       headers: { "Content-Type": "image/png" },
  //     }).then(() => {
  //       console.log("Image uploaded successfully!")
  //     })

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0])
  // }


  // 👇 files is not an array, but it's iterable, spread to get an array of files
  //const files =  fileList ? [...fileList] : [];
  //const files = fileList ? fileList : [];

  return (
    <div className="App ">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        allowReorder={true}
        maxFiles={3}

        credits={false}


        server={filesBaseUrl}
        /*name="files"  sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default FileUploadMultiple;