function Header(){
    return(
        <div>
            <div className="flex justify-between h-30 pb-36 bg-blue-900">
                <div className="mt-9 ml-50">
                    <div className="flex flex-row">
                        <img src="/images/home-img.png" alt="home" className="w-8 h-8 mr-4 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        <h1 className="font-bold text-3xl text-white">Decision Board</h1>
                    </div>
                    <div className="text-right">
                    <a href="" className=" text-white hover:underline">Read more &gt;</a>
                    </div>
                </div>
                <div className="flex justify-end mt-9 mr-50">
                    <div className="flex flex-col items-center">
                        <img src="/images/config-img.png" alt="config"  className="w-8 h-8 mr-2 mt-2 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/user-img.png" alt="user" className="w-16 h-16  transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        <p className="font-bold text-white pt-1">S2JuanS2</p>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-blue-700"/>
        </div>
    );
}

export default Header;