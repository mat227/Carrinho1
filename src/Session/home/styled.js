import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3em;

  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  button {
    font-weight: 700;

    color: #fff;
    background-color: #0e9fe2;

    border: none;
    border-radius: 20px;
    font-family: "Rowdies";

    padding: 0.5em 1.65em;
    margin: 0.3em;
    font-weight: 400;

    cursor: pointer;
  }

  button:hover {
    background-color: #0e9fe2;
  }
  h1 {
    color: #0e9fe2;
    font-size: 10em;
    margin: 0px;
  }
`;

export { Container };
