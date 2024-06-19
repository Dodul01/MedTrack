import useAppContext from "../../hooks/useAppContext"
import { MdWbSunny } from "react-icons/md"
import { FaMoon } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";


const Nav = () => {
    const { theme, changeTheme } = useAppContext();

    return (
        <nav className={`flex items-center gap-3 ${theme === true ? 'bg-[#1A2537] text-[#FFFFFF]' : 'bg-[#EFF4FA] text-[#1A2537]'} transition-all ease-in-out duration-150 w-[76.5vw] py-7 px-2`}>
            <button onClick={changeTheme}>
                {theme ? <MdWbSunny /> : <FaMoon />}
            </button>
            <IoNotificationsSharp className="text-xl" />
        </nav>
    )
}

export default Nav