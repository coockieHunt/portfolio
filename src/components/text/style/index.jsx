import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device } from "../../../utils/style/library/size";


export const BackLine = styled.span `
    background-image: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    color: ${colors.white};
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline;
    padding: 4px;
    margin-top:100px;

    @media ${device.laptop} { 
        margin-top:0px;
    }
`

export const Accentuate = styled.strong `
    color: ${colors.primary};
    font-size: 1.1em;
`