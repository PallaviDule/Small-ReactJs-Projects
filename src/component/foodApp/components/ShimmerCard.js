export const ShimmerCard = () => {
    return (
        <div className = 'shimmer-card flex flex-wrap justify-between'>
            {[1,2,3,4,5,6,7,8,9,10].map((index) => 
                <div className='place-container m-1 w-[265px] h-100 bg-gray-100 hover:bg-amber-50 rounded-lg p-1' key={index}></div>
            )}
        </div>
    )
 };