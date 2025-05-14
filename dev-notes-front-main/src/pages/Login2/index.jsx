import { Link } from 'react-router-dom';
import atosIMG from '../../assets/Art.png';
import atosLOGO from '../../assets/logo-devclub.png';
import { LayoutComponents } from '../../Components/LayoutComponents';

export const Login2 = () => {
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Olá! 👋</span>
                <span className="login-form-title2">Faça login para começar a<br />gerenciar sua rotina.</span>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="seuemail@email.com" 
                        required 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Digite sua senha..." 
                        required 
                    />
                </div>
                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                    <span className="txt1"> ─────────────────────────  </span>
                    <span className='txt4'>Ou</span>
                    <span className='txt1'> ───────────────────────── </span>
                </div>
                <div className="text-center">
                    <span className="txt2">Não possui conta?</span>
                    <Link to="/register" className="txt3">Cadastre-se!</Link>
                </div>
            </form>
            <div className="img-container">
                <span className="img-atos img-atos1">
                    <img src={atosIMG} alt="Logo Art" />
                </span>
            </div>
            <div className="img-container3">
                <span className="img-atos2">
                    <img src={atosLOGO} alt="Logo DevClub" />
                </span>
            </div>
        </LayoutComponents>
    );
}
