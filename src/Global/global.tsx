import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
html, body {
 
    padding: 0;
    margin: 0;
}
    html{
        margin:0;
        padding:0;
        font-size:100%;
        box-sizing:border-box;
        -webkit-box-sizing : inherit;
     
        
    }
    *, *::before, *::after{
        font-family: 'NotoSan', sans-serif;
         -webkit-box-sizing: inherit;
        box-sizing:inherit;
     } 
     body {
         margin:0;
         padding:0;
         line-height: 1.3;
         font-size: 1.125rem;
         
   
   
     font-family: 'NotoSan', sans-serif;
     }
     a{
    text-decoration: none;
     }
     a:link, a:visited {
         text-decoration:none;
     }
 
 .button{
     width:200px;
 }


 h1 {
     font-size: 30px;
     
 }
`;
