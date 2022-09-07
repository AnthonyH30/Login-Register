import styled from "styled-components";


export const RegisterStyle = styled.section`
    background-image: url(https://cdn.discordapp.com/attachments/334770078069293056/1017131018454565004/6205209.jpg);
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-box{
        width: 420px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 8px;

        h1{
            color: rgb(149, 0, 170);
        }

        div{
            display: flex;
            flex-direction: column;
            width: 80%;
            gap: 20px;
            align-items: center;


            input{
                height: 30px;
                font-weight: 500;
                border: none;
                border-bottom: 1px solid rgb(149, 0, 170);
                background-color: transparent;
                outline: none;
                width: 100%;
                font-size: 15px;
            }

            input::placeholder{
                color: rgb(149, 0, 170);
            }

            button{
                width: 120px;
                height: 35px;
                font-weight: bold;
                background-color: transparent;
                border: 2px solid rgb(149, 0, 170);
                border-radius: 5px;
                margin-top: 20px;
                cursor: pointer;
                color: rgb(149, 0, 170);
                transition: all ease-in 0.3s;
            }

            button:hover{
                background-color: rgba(149, 0, 170, 0.7);
                border: none;
                color: white;
            }
        }

        .link p{
                padding-block: 30px;
                font-size: 15px;
                border-top: 2px solid rgb(149, 0, 170);
            }
    }

    @media(max-width:768px){
        .form-box{
            width: 320px;
        }
    }
`;

export default RegisterStyle;