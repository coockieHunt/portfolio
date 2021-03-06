import styled from "styled-components";
import{
    Teapot
} from './style'

import TeapotLogo from '../../utils/img/other/teapot.svg'


const Error = styled.div`
    text-align: center;
    font-size: 1.2em;
    padding:30px;
    color: red;
`;

function NotFoundPage(){
    return(
        <div style={{'height': '90%'}}>
            <Teapot src={TeapotLogo} alt="Node Js logo" />
        
            <Error>server : Ooops 404 not found<br/><br/>me :can you excuse me ? 😟<br/> you: YES 💚 <br/> me : Thank you I swear it won't happen again !! 😊😎</Error>
        </div>
   
    )
}


export default NotFoundPage