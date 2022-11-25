import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const FileUpl = () => {
    const [fileUrl, setFileUrl] = useState('')

	console.log("URL IPS: ", fileUrl);
    return (
        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
            {fileUrl}
            </a>
        </div>
    )
}

export default FileUpl;