import React from "react";
import { FormRegister } from "./styles";


export const Register: React.FC = () => {
    return(
        <div>
            <FormRegister>
                <input type="text" name="" id="" placeholder="Nome"/>
                <input type="date" name="" id="" placeholder="Data de nascimento"/>
                <input type="email" name="" id="" placeholder="Digite novamente"/>
                <input type="email" name="" id="" placeholder="E-mail"/>
                <input type="text" name="" id="" placeholder="Senha"/>
                <input type="text" name="" id="" placeholder="Digite novamente"/>
                <input type="button" value="Registrar" />
                
            </FormRegister>
        </div>
    )
}