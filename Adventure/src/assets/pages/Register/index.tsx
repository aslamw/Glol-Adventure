import React from "react";
import { FormRegister } from "./styles";


export const Register: React.FC = () => {
    return(
        <div>
            <FormRegister>
                <input type="text" name="" id="name" placeholder="Nome"/>
                <input type="date" name="" id="date" placeholder="Data de nascimento"/>
                <input type="email" name="" id="email" placeholder="Digite novamente"/>
                <input type="email" name="" id="rep_email" placeholder="E-mail"/>
                <input type="text" name="" id="senha" placeholder="Senha"/>
                <input type="text" name="" id="rep_senha" placeholder="Digite novamente"/>
                <input type="button" value="Registrar" />
                
            </FormRegister>
        </div>
    )
}