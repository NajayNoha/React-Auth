import { NavLink } from "react-router-dom";
import IconG from '../../assets/icons-google-48.png'  ;
import IconA from '../../assets/icons8-apple-64.png'  ;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from "../../store/features/authSlice";

const MdRegister = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);
    const [confPw, setConfPw] = useState('');
    const [userData, setUserData] = useState({
        nom:'',
        prenom:'',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
        ...userData,
        [name]: value,
        });
    };
    const confirmPw = () =>{
        return confPw !== userData.password ? confPw !== userData.password : false
    }
    const handleSubmit = () => {
        // e.preventDefault();
        dispatch(registerAsync(userData));
    };

    return (
        <div className=" w-full h-screen min-h-[100%] max-h-screen bg-[#0f172a] hidden md:block">
                <div className="w-full h-[100%] flex items-center justify-center">
                {authStatus === 'failed' && <div>Error: Invalid credentials</div>}
                    <div className=" drop-shadow-md p-10 flex-row bg-[#080a1c] border-white rounded-lg items-center lg:w-[40rem] md:w-[80%] h-[80%]  lg:m-[7rem] m-[3.5rem] rounded-[2.5rem] space-y-8">
                        <div className="px-40 text-white text-bold text-[28pt] h-[5%] font-serif"> S'inscrire  </div>
                        <div className="m-0 flex-col items-center w-[100%] h-[50%] space-y-[0.9em]">
                            {/* <div className="text-[#7090a7] text-bold text-2xl px-8"></div>  */}
                            <div className="px-11 flex-row items-center w-[100%] text-[15pt] space-x-[0.2em] flex-nowrap ">
                                <input 
                                className={`text-white rounded-lg focus:m-[1%] bg-[#0f172a]/50  focus:m-2 hover:m-2 hover:bg-[#0f172a] w-[9.75em] h-[2em] focus:h-[2.1rem] focus:w-[49%] border  border-lighter-purple p-4 m-1`} 
                                type="text"
                                name="nom"  
                                placeholder="Nom" 
                                value={userData.nom}
                                onChange={handleInputChange}
                                />

                                <input 
                                className="text-white rounded-lg focus:m-[1%] bg-[#0f172a]/50  focus:m-2 hover:m-2 hover:bg-[#0f172a]  w-[9.75em] h-[2em] focus:h-[2.1rem] focus:w-[49%] border  border-lighter-purple p-4 m-1" 
                                type="text"  
                                name="prenom"  
                                placeholder="Prenom" 
                                value={userData.prenom}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className=" px-12 flex-row items-center w-[100%] text-[15pt] space-y-[0.4em]">
                                <input 
                                className="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[20em] h-[2em] focus:h-[2.5rem] focus:w-[19em] border  border-lighter-purple rounded-lg p-4" 
                                type="text" 
                                name="email"
                                placeholder="example@expm.pp" 
                                value={userData.email}
                                onChange={handleInputChange}

                                />
                            </div>
                            <div className="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                                <input 
                                className="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[20em] h-[2em] focus:h-[2.5rem] focus:w-[19em] border border-lighter-purple rounded-lg p-4" 
                                type="password" 
                                name="password"
                                placeholder="Mot de pass" 
                                value={userData.password}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                                <input 
                                className={`text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[20em] h-[2em] focus:h-[2.5rem] focus:w-[19em] border border-lighter-purple rounded-lg p-4 ${confirmPw() ? 'bg-red border-red' : ''}` }
                                type="password"  
                                name="confPw"
                                placeholder="Confirmer mdp" 
                                value={confPw}
                                onChange={e=>{setConfPw(e.target.value)}}
                                />
                            </div>
                            <div className="px-11 w-[100%] flex-row items-center w-40">
                            <button 
                                className="md:m-0 bg-base-purple text-[18px] rounded-lg md:w-[22.5em] w-[90%] min-h-[42px] text-[#fff] px-3 py-0.5  hover:bg-[#0025f1]/70" 
                                onClick={()=>{handleSubmit()}} 
                                >
                            {/* <NavLink to="/"> */}
                                Connect 
                            {/* </NavLink>  */}
                            </button>
                            </div>
                            <div className="m-6 p- inline-flex space-x-4 w-[100%] ">
                                <div className=" w-[100%] flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none hover:ring-2 hover:ring-lighter-purple">
                                        <img src={IconG} alt="Google Logo" className="w-7 h-6 mr-3" />
                                        Connecter avec Google
                                    </a>
                                </div>
                                <div className="w-[100%] flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none hover:ring-2 hover:ring-lighter-purple">
                                        <img src={IconA} alt="AppleStore Logo" className="w-8 h-8 mr-2" />
                                        Connecter avec Apple
                                    </a>
                                </div>
                            </div>
                            <div className="px-12 flex w-[85%] text-[13.5pt] space-x-0">
                                <span className="flex-1 flex-col items-center text-lighter-purple/50 w-[70%] pl-2 hover:text-lighter-purple/75">Tu as deja un compte?
                                <NavLink className="flex-2 w-[6em] text-lighter-purple/75 hover:underline" to="/login">Se connecter</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MdRegister;
