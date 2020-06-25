import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 30px 45px 0px;

  .titleModal {
    font-size: 18px;
  }

  p {
    font-size: 15px;
  }

  .subTitleModal {
    margin-bottom: 5px;
    color: #737373;
    font-weight: bold;
  }

  .containerRequest {
    margin: 20px 0;
    .wrapperInfos {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
      .itemInfo {
        margin-top: 10px;
        width: 50%;
      }
    }
  }

  .wrapperValues {
    .tableValues {
      .itemValues {
        display: flex;
        justify-content: space-between;

        :not(.totalValue) {
          border-bottom: 1px solid #333;
        }

        margin: 15px 10px;
      }
      .moreParcels {
        text-align: center;
        p {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .totalValue {
        p {
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
    }
  }

  button {
    margin: 15px 0;
    padding: 10px 45px;

    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);

    border-radius: 6px;
    border: 0;

    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }

  .btnRequested {
    width: 100%;

    background-color: #21ae1e;

    :after {
      content: "»";
      font-size: 20px;
      position: relative;
      opacity: 0;
      top: 0%;
      right: -20%;
      transition: 0.5s;
    }

    :hover:after {
      opacity: 1;
      right: -2%;
    }
  }

  .btnClose {
    background-color: #cd5167;
    text-transform: uppercase;
    :hover {
      opacity: 0.8;
    }
  }
`
