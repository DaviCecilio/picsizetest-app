import styled from "styled-components"

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .contactHeader {
    height: 40px;
    background-color: #ff7575;

    .containerContact {
      max-width: 2000px;
      padding: 5px 5vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .wrapperAuthor {
        display: flex;
        align-items: center;

        p {
          margin-left: 20px;
        }
      }

      .wrapperContact {
        ul li {
          display: inline;
          margin-left: 1vw;
          transition: transform 0.2s;
          :hover {
            cursor: pointer;
            img {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        }
      }
    }
  }

  .logoHeader {
    background-color: #ededed;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 150px;
    }
    .titleLogo {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 18px;
    }
  }

  .iconContact {
    width: 28px;
  }

  @media only screen and (max-width: 545px) {
    .iconContact {
      width: 24px;
    }
  }
`
