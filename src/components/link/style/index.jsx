import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import colors from "../../../utils/style/library/color";


export const InterLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.grey};

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    transition: color .4s ease-out;

    & svg{
        margin-right: 5px;
    }

    &.active {
        color: ${props => props.className === "accentuated" ? "white !important" : colors.primary}; ;
        background-color: ${props => props.className === "accentuated" ? colors.primary : null}; ;
    }

    &.accentuated{
        color: ${colors.primary} ;
        padding: 10px;
        border-radius: 3px;
        box-shadow: inset 0px 0px 0px 2px ${colors.primary};
    }

    &:hover{
        color: ${colors.secondary};
    }
`;

export const ExternalLink = styled.a`
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    transition: color .4s ease-out;

    & svg{
        margin-right: 5px;
    }

    &.accentuated{
        color: ${colors.primary} ;
        padding: 10px;
        border-radius: 3px;
        box-shadow: inset 0px 0px 0px 2px ${colors.primary};
    }

    &:hover{
        background-color: ${colors.primary}; ;
        color: white;
    }
`;


export const Img = styled.img `
    cursor: ${props => props.href !== undefined ? 'pointer' : null};

    &:hover{
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
    }

`;