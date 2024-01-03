import React from "react";
import { Password } from "./styles";

export const ForgotPass: React.FC = () => {
    return(
        <Password>
            <form>
                <label htmlFor="email" >Digite o E-mail cadastrado para validar conta</label>
                <input type="email" name="email" id="email" placeholder="E-mail"/>
                <input type="button" value="Enviar" />
            </form>
        </Password>
    )
}