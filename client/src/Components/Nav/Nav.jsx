const Nav = ({theme}) => {
    return (
        <nav className={`${theme === 'dark' ? 'bg-[#1A2537] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#1A2537]'} w-[76.5vw] py-7 px-2`}>Nav</nav>
    )
}

export default Nav