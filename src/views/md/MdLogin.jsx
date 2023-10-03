import { NavLink } from "react-router-dom";
import IconG from '../../assets/icons-google-48.png'  ;
import IconA from '../../assets/icons8-apple-64.png'  ;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from "../../store/features/authSlice";


const MdLogin = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
        ...credentials,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(credentials));
    };
    return (
        <div className=" w-full h-screen min-h-screen max-h-screen bg-[#0f172a] hidden md:block">
                <div className="w-full h-[100%] flex items-center justify-center">
                {authStatus === 'failed' && <div>Error: Invalid credentials</div>}
                    <div className=" drop-shadow-md p-8 flex-row bg-[#080a1c] border border-lighter-purple rounded-lg items-center lg:w-[35rem] md:w-[36rem] h-[80%] block lg:m-[7rem] m-[3.5rem] rounded-[2.5rem] space-y-8">
                        <div className="px-40 text-white text-bold text-[22pt] h-[5%] font-serif">  Se connectée  </div>
                        <div className="m-0  flex-col items-center w-[100%] h-[50%] space-y-[1em]">
                            <div className="px-12 flex-row items-center w-[100%] text-[15pt] space-y-[0.6em]">
                                <div className='text-white'>Email</div>
                                <input 
                                type="text" 
                                className="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[20em] h-[2em] focus:h-[2.5rem] focus:w-[19em] border border-lighter-purple rounded-lg p-4" 
                                placeholder="example@expm.pp" 
                                name="email"
                                value={credentials.email}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                                <div className='text-white w-[10em]'>Mot de pass</div>
                                <input 
                                type="password"
                                className="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[20em] h-[2em] focus:h-[2.5rem] focus:w-[19em] border border-lighter-purple rounded-lg p-4" 
                                placeholder="Mot de pass" 
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}

                                />
                                {/* <span  className="text-[red] w-[18em] max-h-[2em]  text-bold block" v-if="!getPw && password.length != 0">try stronger  </span> */}
                            </div>
                            <div className="px-11 w-[100%] flex-row items-center w-40">
                            <button 
                                onClick={()=>{handleSubmit()}}
                                className="md:m-0 bg-base-purple text-[18px] rounded-lg md:w-[22.5em] w-[90%] min-h-[42px] text-[#fff] px-3 py-0.5 hover:bg-lighter-purple hover:text-base-purple" 
                                >
                            {/* <NavLink to="/"> */}
                                Connect 
                            {/* </NavLink>  */}
                            </button>
                            </div>
                            <div className="m-6 p- inline-flex space-x-4 w-[100%] ">
                                <div className=" w-[100%] flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none focus:ring-2 focus:ring-lighter-purple hover:ring-2 hover:ring-lighter-purple">
                                        <img src={IconG} alt="Google Logo" className="w-7 h-6 mr-3" />
                                        Connecter avec Google
                                    </a>
                                </div>
                                <div className="w-[100%] flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none focus:ring-2 focus:ring-lighter-purple hover:ring-2 hover:ring-lighter-purple">
                                        <img src={IconA} alt="AppleStore Logo" className="w-8 h-8 mr-2" />
                                        Connecter avec Apple
                                    </a>
                                </div>
                            </div>
                            <div className="px-12 flex w-[85%] text-[15pt]">
                                <span className="flex-1 text-lighter-purple/50 w-[70%] px-2 hover:text-lighter-purple/75">Vous n'avez pas un compte?</span>
                                <NavLink className="flex-2 w-[6em] text-lighter-purple/75 hover:underline" to="/register">S'inscrire</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MdLogin;
