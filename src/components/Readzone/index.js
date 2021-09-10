import React, {useContext} from 'react';
import styled from 'styled-components';
import Context from '../../context/conteudo/index';

const Container = styled.div`
  background-color: #fafafa;
`;

const ValorSaida = styled.td`
  color: red;
`;

function Readzone() {
    const { conteudo } = useContext(Context);
    return (
            <div className="container">
                { conteudo ? renderizarExtrato(conteudo.data) : <></>}
            </div>
    );
}

const renderizarExtrato = (data) => {
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
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.lancamentos.map((lancamento, index) =>
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{formatarData(lancamento.data)}</td>
            <td>{lancamento.descricao}</td>
            {lancamento.tipo == "Entrada"? <td>{formatarValor(lancamento.valor)}</td> : <ValorSaida>{formatarValor(lancamento.valor)}</ValorSaida>}
            <td>{lancamento.tipo.replace("i", "í")}</td>
          </tr>
          )
          }
        </tbody>
      </table>
    </Container>
  );
}

const formatarData = (dataLancamento) => {
  const data = new Date(dataLancamento);
  let dataFormatada = new Intl.DateTimeFormat('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'}).format(data);
  return dataFormatada;
}

const formatarValor = (valor) => {
  return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export default Readzone;