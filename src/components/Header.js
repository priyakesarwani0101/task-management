const Header = ({text, count}) => {
    return (
        <div className="bg-slate-500 flex items-center h-10 p-4 rounded-md uppercase text-sm text-white">
            <h2>{text}</h2>
            <div className="ml-2 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center">{count}</div>
        </div>
    )
}

export default Header;