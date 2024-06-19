import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext"
import { TiArrowDown, TiChartArea, TiDevicePhone, TiHome, TiPhone, TiShoppingBag, TiShoppingCart } from "react-icons/ti";

const SideNav = () => {
    const { theme } = useAppContext();
    const links = <>

    </>
    return (
        <div className={`${theme === true ? 'bg-[#1A2537] text-gray-400' : 'bg-[#EFF4FA] text-[#1A2537]'} h-screen min-w-[320px]`}>
            <div className="flex items-center justify-center">
                <img className="h-[80px]" src="https://i.ibb.co/rpPPpd7/Blue-and-White-Flat-Illustrative-Health-Products-Logo-1-removebg-preview.png" alt="LOGO" />
            </div>
            <div>
                <ul>
                    <Link to={'/'}>
                        <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiHome className="text-xl" /> Home</li>
                    </Link>
                    <Link to={'/sell'}>
                        <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiShoppingCart className="text-xl" /> Sell <TiArrowDown className="text-xl" /></li>
                        <div>
                            <ul>
                                <li>All Sales</li>
                                <li>Add Sale</li>
                                <li>POS</li>
                                <li>Draft List</li>
                                <li>Due Sale List</li>
                                <li>Sale Return List</li>
                            </ul>
                        </div>
                    </Link>
                    <Link to={'/contacts'}>
                        <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiPhone className="text-xl" /> Contacts</li>
                    </Link>
                    <Link to={'/products'}>
                        <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiShoppingBag className="text-xl" /> Products</li>
                    </Link>
                    <Link to={'/purchases'}>
                        <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiChartArea className="text-xl" /> Purchases</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SideNav