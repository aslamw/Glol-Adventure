import styled from "styled-components";

export const Password = styled.main`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Gray-900);

    height: 100vh;
    width: auto;

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        font-size: 20px;

        background-color: var(--green);
        border-radius: 20px;
        width: 300px;
        height: 300px;
    }
    input{
        width: 250px;
        height: 30px;

        border-radius: 10px;
    }

    input[type="button"]{
        width: 150px;
        margin-left: 40%;
    }

`