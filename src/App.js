import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
const axios = require('axios');

const getColor = (props) => {
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
  margin: auto 5vw auto 5vw;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function App() {
  
  const [conteudo, setConteudo] = useState("");
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'application/pdf', getFilesFromEvent: event => obterTextoArquivo(event)});

    async function obterTextoArquivo(event) {
      const files = [];
      const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    
      for (var i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        
        Object.defineProperty(file, 'myProp', {
          value: false
        });
    
        files.push(file);
    
        var formData = new FormData();
        formData.append("arquivo", file);
        await axios.post('http://localhost:8080/lerPDF', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
          setConteudo(response.data);
        }).catch(function (error) {
          window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        });
      }
      return files;
  }
  
  return (
    <>
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Solte o pdf aqui ou clique para selecioná-lo</p>
      </Container>
    </div>
    <h3>Leitura do pdf:</h3>
    <p>{conteudo}</p>
    </>
  );
}

export default App;
