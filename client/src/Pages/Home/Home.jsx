import useAppContext from "../../hooks/useAppContext"

const Home = () => {
    const {theme} = useAppContext();
    
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                <div className={`bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]`}>
                    <h1 className="text-lg font-medium">Total purchase</h1>
                    <div className="font-medium text-lg">00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text-lg font-medium">Total sales</h1>
                    <div className="font-medium text-lg">00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text-lg font-medium">Purchase due</h1>
                    <div className="font-medium text-lg">00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text-lg font-medium">Invoice due</h1>
                    <div>00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text-lg font-medium">Total purchase return</h1>
                    <div className="font-medium text-lg">00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text-lg font-medium">Total sell return</h1>
                    <div className="font-medium text-lg" >00 tk</div>
                </div>
                <div className="bg-[#635BFF] bg-opacity-20 text-white p-5 rounded-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(33.33%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                    <h1 className="text- font-medium">Expense</h1>
                    <div className="font-medium text-lg">00 tk</div>
                </div>
            </div>
        </div>
    )
}

export default Home