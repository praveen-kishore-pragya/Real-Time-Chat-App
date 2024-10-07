function Input({height, width, placeholder, onClick}){

    return(
        <>
            <input className={`input m-2 bg-gray-600 rounded-md border border-white flex flex-col h-${height} w-${width} justify-center text-center text-white`} 
            type="text" placeholder={`${placeholder}`}  onChange={(e) => onClick(e.target.value)}/>
        </>
    )
}

export default Input


// style={ {height:`${height}vh`, width: `${width}vw`} }