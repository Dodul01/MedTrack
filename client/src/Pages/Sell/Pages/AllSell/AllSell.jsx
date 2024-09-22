import { BsBoxSeam, BsClock, BsCheckCircle } from 'react-icons/bs';
import useAppContext from '../../../../hooks/useAppContext';

const AllSell = () => {
    const { theme } = useAppContext();

    return (
        <section className={`${theme ? 'bg-[#1A2537]' : 'bg-white'} py-2 antialiased md:py-16 min-h-screen ml-80 mt-20`}>
            <div className="mx-auto max-w-screen-xl px-3 2xl:px-0">
                <div className="mx-auto max-w-5xl">
                    <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">All Sells</h2>

                        <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                            <div>
                                <label htmlFor="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900">
                                    Select order type
                                </label>
                                <select
                                    id="order-type"
                                    className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                >
                                    <option defaultValue>All orders</option>
                                    <option value="pre-order">Pre-order</option>
                                    <option value="transit">In transit</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>

                            <span className="inline-block text-gray-500"> from </span>

                            <div>
                                <label htmlFor="duration" className="sr-only mb-2 block text-sm font-medium text-gray-900">
                                    Select duration
                                </label>
                                <select
                                    id="duration"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                >
                                    <option defaultValue>this week</option>
                                    <option value="this month">this month</option>
                                    <option value="last 3 months">the last 3 months</option>
                                    <option value="last 6 months">the last 6 months</option>
                                    <option value="this year">this year</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flow-root sm:mt-8">
                        <div className="divide-y divide-gray-200">
                            {/* Pre-order */}
                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB127364372</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">20.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">130TK</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                                        <BsBoxSeam className="me-1 h-3 w-3" />
                                        Pre-order
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button
                                        type="button"
                                        className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 lg:w-auto"
                                    >
                                        Cancel order
                                    </button>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>

                            {/* In-transit */}
                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB125467980</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">11.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">140TK</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                        <BsClock className="me-1 h-3 w-3" />
                                        In transit
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button
                                        type="button"
                                        className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 lg:w-auto"
                                    >
                                        Cancel order
                                    </button>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>

                            {/* Confirm */}
                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB139485607</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">08.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">85TK</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <BsCheckCircle className="me-1 h-3 w-3" />
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button
                                        type="button"
                                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 lg:w-auto"
                                    >
                                        Download invoice
                                    </button>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>

                            {/* Cancel */}
                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB125463728</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">03.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">16TK</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                        <BsClock className="me-1 h-3 w-3" />
                                        Cancelled
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a
                                href="#"
                                aria-label="Previous"
                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                                <span>Previous</span>
                            </a>
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center border border-primary-500 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                                3
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            >
                                <span>Next</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllSell