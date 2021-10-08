import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  padding: 3em;
  margin: 3em;
  box-shadow: 0px 0px 5px 1px #d5d4d6;
  border-radius: 30px;
  align-items: center;

  .capa {
    width: 7em;
    height: 8em;
    margin-bottom: 3em;
  }

  .titulo {
    font: 700 1.5em Roboto;
    margin-bottom: 1em;

    color: #000;
  }

  .preco {
    font: 400 1.5em Roboto;

    color: #000;
  }

  button {
    border-radius: 2em;
    border: none;
    outline: none;
    padding: 0.5em 1.5em;

    font: 400 1em Roboto;
    background-color: #0e9fe2;
    color: #fff;
    cursor: pointer;
  }
`;

export { Container };
