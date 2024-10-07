function Button({label, onClick}){
    return(
        <>
            <button className="button m-2 bg-gray-900 rounded-md border border-white w-20 h-12 text-white" 
            onClick={onClick}>{label}</button>
        </>
    )
}

export default Button