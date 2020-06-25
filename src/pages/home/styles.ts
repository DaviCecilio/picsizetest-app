import styled from "styled-components"

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .containerForm {
    margin-top: 30px;
    padding: 30px;

    background: #ffffff;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    form {
      width: 40vw;
      min-width: 210px;
      max-width: 750px;

      display: flex;
      align-items: center;
      flex-direction: column;

      input,
      select {
        width: calc(100% - 6vw);
        height: auto;
        margin: 15px 0;

        background: #ffffff;
        border: 2px solid #888585;
        border-radius: 3px;
        padding: 15px 10px;
      }

      .bntSubmit {
        width: calc(100% - 10vw);
        padding: 10px 0;

        background-color: #f3a126;
        color: #ffffff;

        border: 0;
        border-radius: 3px;

        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        &:hover {
          opacity: 0.8;
        }
      }

      .errorMessage {
        display: flex;
        justify-content: center;
        color: #cd5167;
        .iconError {
          font-size: 22px;
          margin-right: 6px;
        }
      }
    }
  }
`
