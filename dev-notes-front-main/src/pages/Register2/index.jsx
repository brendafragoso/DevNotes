import React from 'react';
import { LayoutComponents } from "../../Components/LayoutComponents";
import atosLOGO from '../../assets/logo-devclub.png';
import atosIMG from '../../assets/Art.png';
import './styles.css';

export const Register2 = () => {
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Cadastre-se</span>
                <span className="login-form-title1">Preencha os campos para concluir<br /> seu cadastro</span>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="input-field" 
                        placeholder="Informe seu nome..." 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="input-field" 
                        placeholder="seuemail@email.com" 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="input-field" 
                        placeholder="Digite sua senha..." 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="confirmPassword">Confirme a Senha</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        className="input-field" 
                        placeholder="Confirme a senha..." 
                    />
                </div>
                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">Cadastrar</button>
                </div>
            </form>
            <div className="img-container1">
                <span className="img-atos img-atos1">
                    <img src={atosIMG} alt="Logo Art" />
                </span>
            </div>
            <div className="img-container4">
                <span className="img-atos2">
                    <img src={atosLOGO} alt="Logo Dev Club" />
                </span>
            </div>
        </LayoutComponents>
    );
};
