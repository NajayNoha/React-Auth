// import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconG from '../../assets/icons-google-48.png'  ;
import IconA from '../../assets/icons8-apple-64.png'  ;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from "../../store/features/authSlice";

const SmRegister = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);
    const [confPw, setConfPw] = useState('');
    const [userData, setUserData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setUserData({
        ...userData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAsync(userData));
    };

    return (
        <div className=" w-full min-h-screen md:hidden max-h-screen sm:block">
        <div className="w-full h-screen min-h-screen flex items-center justify-center ">
        {/* {authStatus === 'failed' && <div>Error: Invalid credentials</div>} */}
            <form className="w-full h-screen min-h-screen drop-shadow-md px-6 min-pt-0 pt-[5%] flex-row bg-[#080a1c] items-center text-[white] overflow-y-scroll">
                <div className="min-w-[90%] w-[90%] h-[90%] p-4 flex-row  space-y-2.5 items-center overflow-y-scroll ">
                    <div className="flex items-center justify-center text-white text-bold justify-center text-[25px] h-[10%]"> Sinscrire </div>
                    <div className="m-0 p-0 w-[100%] h-[70%]">
                        <div className="flex-row space-y-6 p-4 w-[fit-content] border border-lighter-purple rounded-lg">
                            <div className="flex space-x-4">
                                <input 
                                className={`text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[47%] h-[2em] focus:h-[2.1rem] focus:w-[50%] border border-lighter-purple`} 
                                placeholder="Nom" 
                                type="text"
                                name="nom"  
                                value={userData.nom}
                                onChange={handleInputChange}
                                    
                                />
                                <input 
                                className="text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[47%] h-[2em] focus:h-[2.1rem] focus:w-[50%] border border-lighter-purple" 
                                placeholder="Prenom" 
                                type="text"  
                                name="prenom"  
                                value={userData.prenom}
                                onChange={handleInputChange}
                                    
                                />
                            </div>
                            <div className="flex-row items-center w-[100%] text-[15pt] space-y-[0.4em]">
                                <input 
                                className="text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[98%] h-[2em] focus:h-[2.1rem] focus:w-[85%] border border-lighter-purple" 
                                placeholder="example@expm.pp" 
                                type="text" 
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}

                                />
                                {/* <span v-if="!getEmail&&email.length!=0" className="text-[red] w-[18em] max-h-[2em]  text-bold block">Invalid Email</span> */}
                            </div>
                            <div className="flex space-x-4">
                                <input 
                                className={`text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[47%] h-[2em] focus:h-[2.1rem] focus:w-[50%] border border-lighter-purple`} 
                                placeholder="Mot de Pass" 
                                type="password" 
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                
                                />
                                <input 
                                className="text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[47%] h-[2em] focus:h-[2.1rem] focus:w-[50%] border border-lighter-purpleborder" 
                                placeholder="Confirme mdp" 
                                type="password"  
                                name="confPw"
                                value={confPw}
                                onChange={e=>{setConfPw(e.target.value)}}
                                
                                />
                                    {/* <span v-if="name.length==0&&email.length!=0" className="text-[red] w-[18em] max-h-[2em]  text-bold block">Name Required</span> */}
                            </div>
                            <button 
                                type="submit"
                                className="bg-base-purple text-[18px] rounded-lg w-[100%] min-h-[42px] text-[#fff] px-3 py-0.5 hover:bg-[#0025f1]/70 hover:text-[21px]" 
                                onClick={(e)=>{handleSubmit(e)}} 
                                >
                            {/* <NavLink to="/"> */}
                                Connect 
                            {/* </NavLink> */}
                            </button>
                            <div className=" text-[10pt] inline-flex space-x-6 w-[100%] h-6 ">
                                <div className=" flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <img src={IconG} alt="Google Logo" className="w-5 h-4 mr-3" />
                                        Connecter avec Google
                                    </a>
                                </div>
                                <div className="w-[100%] flex-row items-center w-[40%] space-x-2 justify-center">
                                    <a href="" className="inline-flex items-center text-white px-4 py-2 rounded-md hover:bg-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <img src={IconA} alt="AppleStore Logo" className="w-8 h-8 mr-2" />
                                        Connecter avec Apple
                                    </a>
                                </div>
                            </div>
                            <div className="px-2 min-w-[100%] flex w-[90%] text-[13pt]">
                                <span className="flex-1 items-center min-w-[60%] text-lighter-purple/50 :hover-text-[#9ca3aff7]">Tu as deja un compte?</span>
                                <NavLink className="flex-2 flex items-center min-w-[30%] min-w-[30%] text-lighter-purple/75 hover:underline " to="/login">Se connecter</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default SmRegister;
