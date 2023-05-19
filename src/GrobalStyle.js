import { createGlobalStyle } from "styled-components"

const GrobalStyle = createGlobalStyle`
    html {
        font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
        line-height: 1.5;
        font-size: 15px;
        font-weight: 400;
    }

    body {
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 1.2rem;
        text-align: center;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
`

export default GrobalStyle;