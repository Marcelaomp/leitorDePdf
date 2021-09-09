import React, {useContext} from 'react';
import styled from 'styled-components';
import Context from '../../context/conteudo/index';

const Container = styled.div`
  background-color: #fafafa;
  height:80vh;
  max-width:35vw;
 
`;

function Readzone() {
    const { conteudo, setConteudo } = useContext(Context);
    return (
            <div className="container">
                { conteudo ? renderizarExtrato(conteudo.data) : <></>}
            </div>
    );
}

function renderizarExtrato(data) {
  return (
    <Container>
      <h3>Empresa</h3>
      <p>Nome: {data.empresa.nome }</p>
      <p>Cnpj: {data.empresa.cnpj }</p>

      <h3>Conta bancária</h3>
      <p>Agência: {data.contaBancaria.agencia}</p>
      <p>Conta: {data.contaBancaria.numero}</p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Data</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.lancamentos.map((lancamento, index) =>
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{lancamento.data}</td>
            <td>{lancamento.descricao}</td>
            <td>{lancamento.valor}</td>
          </tr>
          )
          }
        </tbody>
      </table>
    </Container>
  );
}

export default Readzone;