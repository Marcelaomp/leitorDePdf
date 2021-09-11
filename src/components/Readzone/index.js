import React, {useContext} from 'react';
import styled from 'styled-components';
import Context from '../../context/conteudo/index';
import Alert from '../Alert/index';

const Container = styled.div`
  background-color: #fafafa;
  min-height: 80vh;
`;

const ValorSaida = styled.td`
  color: red;
`;

const Mensagem = styled.div`
    height: "80vh";
`;

function Readzone() {
    const { conteudo } = useContext(Context);

    const renderizarExtrato = (data) => {
      const colunas = [ "#", "Data", "Descrição", "Valor", "Tipo"];
      return (
        <Container>
          <h3>Empresa</h3>
          <p>Nome: {data.empresa.nome }</p>
          <p>Cnpj: {data.empresa.cnpj }</p>
    
          <h3>Conta bancária</h3>
          <p>Agência: {data.contaBancaria.agencia}</p>
          <p>Conta: {data.contaBancaria.numero}</p>
    
          <table className="table">
            <thead>
              <tr>
                {colunas.map(coluna => <th scope="col">{coluna}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.lancamentos.map((lancamento, index) =>
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{formatarData(lancamento.data)}</td>
                <td>{lancamento.descricao}</td>
                {lancamento.tipo === "Entrada"? <td>{formatarValor(lancamento.valor)}</td> : <ValorSaida>{formatarValor(lancamento.valor)}</ValorSaida>}
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
      return new Intl.DateTimeFormat('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'}).format(data);
    }
    
    const formatarValor = (valor) => {
      return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    const renderizarAvisos = (alerta) => {
      return(
        <Mensagem className="row" style={{height: "80vh"}}>
            <div className="col d-inline-flex align-items-center justify-content-center">
              <Alert tipo={alerta.tipo} mensagem={alerta.mensagem} />
            </div>
        </Mensagem>
      )
    }

    return (
      <div className="container">
          {conteudo && conteudo.data ? renderizarExtrato(conteudo.data) : renderizarAvisos(conteudo)}
      </div>
    );
}

export default Readzone;