const Pagination = () => {
    return (
        <>
        {/* <!-- Pagination --> */}
        <ul className="flex items-center space-x-2">
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                    <i className="fas fa-chevron-left"></i>
                </a>
            </li>
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">1</a>
            </li>
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">2</a>
            </li>
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">3</a>
            </li>
            <li>
                <span className="text-white px-2">...</span>
            </li>
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">50</a>
            </li>
            <li>
                <a href="#"
                    className="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
        </ul>
        <div className="h-[3px] bg-main-color mb-4 mt-16"></div>
        </>
    );
};
export default Pagination;