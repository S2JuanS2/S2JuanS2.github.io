function Header(){
    
    return(
        <div className="fixed w-full">
            <div className="flex justify-between pb-5 bg-blue-900">
                <div className="mt-5 ml-50">
                    <div className="flex flex-row">
                        <img src="/images/config-img.png" alt="home" className="w-8 h-8 mr-2 mt-1 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        <h1 className="font-bold text-3xl text-white">Thinks & Pick</h1>
                    </div>
                    <div className="text-right">
                    <a href="" className=" text-white hover:underline">Saber más &gt;</a>
                    </div>
                </div>
                <div className="flex justify-end mt-5 mr-50">
                    <div className="flex flex-col items-center">
                        <img src="/images/home-img.png" alt="config"  className="w-6 h-6 mr-2 mt-2 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://github.com/S2JuanS2">
                            <img src="/images/user-img.png" alt="user" className="w-12 h-12  transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        </a>
                        <p className="font-bold text-white pt-1 text-sm">S2JuanS2</p>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-blue-700"/>
        </div>
    );
}

export default Header;