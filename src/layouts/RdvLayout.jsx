import { Outlet } from 'react-router-dom';

const RdvLayout = () => {
    return (
        <div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}

export default RdvLayout;
