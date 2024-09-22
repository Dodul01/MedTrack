import useAppContext from "../../hooks/useAppContext";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsMenuButtonWide } from "react-icons/bs";

const Nav = () => {
    const { theme, changeTheme } = useAppContext();

    return (
        <nav className={`fixed w-full ${theme ? 'bg-[#1A2537] text-white' : 'bg-[#EFF4FA] text-[#1A2537]'} transition-all ease-in-out duration-300 py-5 px-4 z-50`}>
            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center justify-between gap-4 w-full">
                <div className="flex justify-between w-full">
                    <h1 className="text-xl font-bold">MedTrack</h1>
                    <div className="flex gap-4 items-center">
                        <button onClick={changeTheme} className="focus:outline-none">
                            {theme ? <MdWbSunny className="text-2xl" /> : <FaMoon className="text-2xl" />}
                        </button>
                        <IoNotificationsSharp className="text-2xl" />
                    </div>
                </div>
                <div>
                    <BsMenuButtonWide className="text-2xl" />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">MedTrack</h1>
                <div className="flex gap-6 items-center">
                    <button onClick={changeTheme} className="focus:outline-none">
                        {theme ? <MdWbSunny className="text-2xl" /> : <FaMoon className="text-2xl" />}
                    </button>
                    <IoNotificationsSharp className="text-2xl" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
