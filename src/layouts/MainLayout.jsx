import { Outlet } from "react-router-dom";
import MainHeader from "../components/partials/MainHeader";


const MainLayout = () => {
    return (
        <div className="w-full h-screen dark:bg-[#080a1cd9] sm:py-2 py-8 px-2">
            <MainHeader />
            <main>
                <div className="min-w-[80%] min-h-[50rem] p-2 flex gap-5">
                    <Outlet />
                </div>
            </main>

        </div>
    );
}

export default MainLayout;
