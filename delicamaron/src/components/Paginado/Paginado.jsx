export default function Paginado({recetasPerPage,allRecetas,paginado,setCurrentPage,currentPage}){
    
    


    const pageNumbers = []

    for(let i= 1; i<= Math.ceil(allRecetas/recetasPerPage); i++){
        pageNumbers.push(i)
    }

    function handlePrev(e) {
        e.preventDefault()
        if (e.target.innerHTML === "Next" && currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1)
        } 
        if(e.target.innerHTML === "Prev" && currentPage > 1 ) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <nav className="paginador">
                    
            <ul className="number">
                            <button onClick={(e)=>handlePrev(e)}>Prev</button> 
                {pageNumbers && pageNumbers.map(number =>(
                    
                    <li className="number" key={number}> 
                            
                            <button onClick={()=>paginado(number)}> {number}  </button>
    
                    </li>
                ))}
                           
                            <button onClick={(e)=>handlePrev(e)}>Next</button>
                

            </ul>
        </nav>
    )

}