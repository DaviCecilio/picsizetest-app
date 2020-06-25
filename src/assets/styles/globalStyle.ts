import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

  body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Open Sans';
  min-height: 100%;
  }

  .container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  }

  main{
    flex: 1 0 auto;
    margin: 30px 0;
  }

  footer {
    flex-shrink: 0;
  }


  .font-white{
    color: #ffffff;
    font-weight: bold
  }
  .mt-3{
    margin-top: 3vh;
  }

  .alignCenter{
    text-align: center;
  }

`
