import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext"
import { TiArrowDown, TiCalculator, TiChartArea, TiDevicePhone, TiExportOutline, TiHome, TiPhone, TiShoppingBag, TiShoppingCart } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const SideNav = () => {
    const { theme } = useAppContext();
    const [isSellOpen, setIsSellOpen] = useState(false);
    const [isContactOpen, setISContactOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isPurchasesOpen, setIsPurchasesOpen] = useState(false);
    const [isExpenseOpen, setIsExpenseOpen] = useState(false);
    const [isAccountingOpen, setIsAccountingOpen] = useState(false);
    const [isReportsOpen, setIsReportOpen] = useState(false);
    const [isSettingsOpen, setIsSettingOpen] = useState(false);

    const links = <>
        <Link to={'/'}>
            <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiHome className="text-xl" /> Home</li>
        </Link>
        <li>
            <Link to={'/sell'}>
                <li onClick={() => setIsSellOpen(!isSellOpen)} className="flex items-center justify-between gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><span className="flex items-center gap-3"><TiShoppingCart className="text-xl" /> Sell</span> <IoIosArrowDown className={`text-xl transition-all ease-in-out duration-300 ${isSellOpen ? 'rotate-180' : 'rotate-0'}`} /></li>
            </Link>
        </li>
        <li>
            <div className={`${isSellOpen ? 'opacity-100 max-h-[1000px]' : 'max-h-0 opacity-0'} overflow-hidden duration-300 transition-all ease-in-out`}>
                <ul className="ml-5">
                    <Link to={'/sell/allSell'} className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">All Sales</Link>
                    <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Add Sale</li>
                    <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">POS</li>
                    <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Draft List</li>
                    <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Due Sale List</li>
                    <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Sale Return List</li>
                </ul>
            </div>
        </li>
        <Link to={'/contacts'}>
            <li onClick={() => setISContactOpen(!isContactOpen)} className="flex items-center justify-between gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><span className="flex items-center gap-3"><TiPhone className="text-xl" /> Contacts</span> <IoIosArrowDown className={`text-xl transition-all ease-in-out duration-300 ${isContactOpen ? 'rotate-180' : 'rotate-0'}`} /></li>
        </Link>
        <li className="ml-5">
            <div className={`${isContactOpen ? 'opacity-100 max-h-56' : 'opacity-0 max-h-0'} overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Suppliers</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Customers</li>
            </div>
        </li>
        <Link to={'/products'}>
            <li onClick={() => setIsProductsOpen(!isProductsOpen)} className="flex items-center justify-between gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><span className="flex items-center gap-3"><TiShoppingBag className="text-xl" /> Products</span> <IoIosArrowDown className={`text-xl transition-all ease-in-out duration-300 ${isProductsOpen ? 'rotate-180' : 'rotate-0'}`} /></li>
        </Link>
        <li className="ml-5">
            <div className={`${isProductsOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">List Products</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Add Products</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Product Stock Manage</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Update Price</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Generic/Categories</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Brands</li>
            </div>
        </li>
        <Link to={'/purchases'}>
            <li onClick={() => setIsPurchasesOpen(!isPurchasesOpen)} className="flex items-center justify-between gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"> <span className="flex items-center gap-3"><TiChartArea className="text-xl" /> Purchases</span> <IoIosArrowDown className={`text-xl transition-all ease-in-out duration-300 ${isPurchasesOpen ? 'rotate-180' : 'rotate-0'}`} /></li>
        </Link>
        <li className="ml-5">
            <div className={`${isPurchasesOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">List Purchases</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Add Purchase</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">List Purchase Return</li>
            </div>
        </li>
        <Link to={'/expenses'}>
            <li onClick={() => setIsExpenseOpen(!isExpenseOpen)} className="flex items-center justify-between gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"> <span className="flex items-center gap-3"><TiExportOutline className="text-xl" /> Expenses</span> <IoIosArrowDown className={`text-xl transition-all ease-in-out duration-300 ${isExpenseOpen ? 'rotate-180' : 'rotate-0'}`} /></li>
        </Link>
        <li className="ml-5">
            <div className={`${isExpenseOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">Add Expenses</li>
                <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl">List Of Expenses</li>
            </div>
        </li>
        <Link to={'/accounting'}>
            <li className="flex items-center gap-3 py-3 px-3 m-2 font-medium hover:bg-[#635BFF] hover:text-gray-100 transition-all ease-in-out duration-200 cursor-pointer rounded-xl"><TiCalculator className="text-xl" /> Accounting</li>
        </Link>
    </>

    return (
        <div className={`fixed lg:block hidden ${theme === true ? 'bg-[#1A2537] text-gray-400' : 'bg-[#EFF4FA] text-[#1A2537]'} h-screen min-w-[300px]`}>
            <div className="flex items-center justify-center">
                <h2 className="my-5 text-xl font-semibold">MedTrack</h2>
            </div>
            <div className="overflow-x-scroll max-h-[82vh]">
                <ul>
                    {links}
                </ul>
                <style jsx>{`
                    div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            </div>
        </div>
    )
}

export default SideNav