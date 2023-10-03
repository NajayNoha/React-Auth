import { NavLink } from "react-router-dom";
import IconG from '../../assets/icons-google-48.png'  ;
import IconA from '../../assets/icons8-apple-64.png'  ;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from "../../store/features/authSlice";

const SmLogin = () => {
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
        <div className=" w-full min-h-screen md:hidden max-h-screen sm:block">
        <div className="w-full h-screen min-h-screen flex items-center justify-center">
            <div className="w-full h-screen min-h-screen drop-shadow-md pt-[5%] flex-row bg-[#080a1c] text-[white] justify-center ">
            {authStatus === 'failed' && <div>Error: Invalid credentials</div>}
                <div className="w-[90%] h-[90%] px-[10%] pt-4 flex-row space-y-2.5 items-center overflow-x-scroll overflow-y-scroll">
                    <div className="flex items-center justify-center text-white text-bold justify-center text-[25px] h-[10%]"> Se connecté </div>
                    <div className="text-[#7090a7] px-4 text-bold text-[18px] flex items-center justify-center"></div> 
                    <div className="m-0 p-0 w-[100%] h-[70%]">
                        <div className="flex-row space-y-6 p-4 w-[fit-content] border border-lighter-purple rounded-lg">
                            <div className="flex-row items-center w-[100%] text-[15pt] space-y-[0.4em]">
                                <input 
                                type="text" 
                                className="text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[98%] h-[2em] focus:h-[2.1rem] focus:w-[85%] border border-lighter-purple" 
                                placeholder="example@expm.pp" 
                                name="email"
                                value={credentials.email}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex space-x-4">
                                    <input 
                                    type="password"
                                    className={`text-white text-[12pt] px-2 rounded-lg focus:m-[1%] bg-[#0f172a]/50 w-[98%] h-[2em] focus:h-[2.1rem] focus:w-[85%] border border-lighter-purple`} 
                                    placeholder="Mot de Pass" 
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <button 
                                onClick={()=>{handleSubmit()}} 
                                className="bg-base-purple text-[18px] rounded-lg w-[100%] min-h-[30px] text-[#fff] px-3 py-0.5 hover:bg-[#0025f1]/70 hover:text-[21px]" 
                                >
                            {/* <NavLink to="/"> */}
                                Connect 
                            {/* </NavLink>  */}
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
                            <div className="px-2 min-w-[100%] flex w-[90%] text-[13pt] space-x-6">
                            <NavLink className="flex-2 flex items-center min-w-[30%] min-w-[30%] text-lighter-purple/50 hover:underline " to="/register">S'inscrire</NavLink>
                                <span className="flex-3 w-18 text-lighter-purple/50 hover:underline "><a href="/forgot-password">Mot de pass oublier ?</a></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SmLogin;
