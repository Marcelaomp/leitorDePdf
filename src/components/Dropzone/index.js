import React, { useContext } from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import Context from '../../context/conteudo/index';
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
  padding: 100px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  height:80vh;
`;

function Dropzone() {
    const { setConteudo } = useContext(Context);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: 'application/pdf',
        getFilesFromEvent: event => obterTextoArquivo(event)
    });

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
            formData.append("file", file);
            await axios.post('https://hml-poc-leitor-pdf.alterdatasoftware.com.br/pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                setConteudo(response.data);
            }).catch(function (error) {
                console.log(error)
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
        </>
    );
}

export default Dropzone;