import styled from "styled-components";

export const FormRegister = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--Gray-900);

    width: 100vw;
    height: 100vh;
    
    .ball{
        position: absolute;

        top: 0;
        right: 50%;
        left: 25%;
        bottom: 0;

        width: 50%;
        height: 80%;

        border-radius: 100%;
        z-index: 1;
    }
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        width: 40%;
        height: 70%;
        padding: 5px;

        margin-bottom: 10%;
        z-index: 2;

    }

    /* base geral dos inputs */
    input{
        border-radius: 5px;
        border: var(--green) 2px solid;

        width: 280px;
        height: 28px;

        padding: 5px;

    }

    input[type="date"]{
        width: 120px;
        height: 20px;
    }

    /* efeitos do botão */
    input[type="button"]{
        border-radius: 30px;
        padding: 2px;
        margin: 30px;

        width: 140px;
        height: 40px;

        background-color: var(--green);
        color:white;

        font-family: aboreto-bold;
        font-size: 15px;
    }
    input[type="button"]:hover{
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.05);

    }
    input[type="button"]:active{
        
        background-color: var(--green-light);
        
        color: var(--green-dark);
        border: var(--green-light) 2px solid;
    }

    /* animação da onda */
    .onda{
        position: absolute;
        bottom: 0;
        width: 100%;

        overflow: hidden;
        z-index: 0;
    
    }

    svg{
        height: auto;
        width: 130%;

        bottom: 0; 
    }
    .wave1{
        animation: move_wave 2s ease-in-out infinite alternate;
    }
    @keyframes move_wave{
        from{
            transform: translateX(-160px);
        }
    }

    .wave2{
        animation: move_wave2 1.6s ease-in-out infinite alternate;
    }
    @keyframes move_wave2{
        from{
            transform: translateX(-110px);
        }
    }

    .wave3{
        animation: move_wave3 2.3s ease-in-out infinite alternate;
    }
    @keyframes move_wave3{
        from{
            transform: translateX(-160px);
        }
    }


    /* responsividade para desktop */
   @media (min-width: 768px){

        form{
            width: 50%;
            height: 60%;
        }

        input{
            width: 60%;
            height: 6%;
        
        }

        input[type="date"]{
            width: 200px;
            height: 30px;
        }

        input[type="button"]{
            margin: 0;
            width: 150px;
            height: 40px;

            font-size: 20px;
            
        }
   }

`