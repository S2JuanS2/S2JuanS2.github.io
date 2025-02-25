function Header(){
    return(
        <div>
            <div className="flex justify-between h-30 pb-36">
                <div className="mt-9 ml-45">
                    <div className="flex flex-row">
                        <img src="/images/home-img.png" alt="" className="w-8 h-8 mr-4 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        <h1 className="font-bold text-3xl text-white">Decision Board</h1>
                    </div>
                    <div className="text-right">
                    <a href="" className=" text-white">Read more</a>
                    </div>
                </div>
                <div className="mt-9 h-20 w-250 bg-blue-900 rounded-b-lg">
                    <div className="flex justify-center">
                        <p className="text-gray-500">Publicidad</p>
                    </div>
                </div>
                <div className="flex justify-end mt-9 mr-45">
                    <img src="/images/config-sec-img.png" alt=""  className="w-10 h-10 mr-4 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                    <div className="flex flex-col items-center">
                        <img src="/images/user-img.png" alt="" className="w-16 h-16  transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        <p className="font-bold text-white pt-1">S2JuanS2</p>
                    </div>
                </div>
            </div>
            <hr className="border-1 ml-45 mr-45 border-blue-700"/>
        </div>
    );
}

export default Header;