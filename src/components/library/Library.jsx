import React from 'react';
import LibraryCard from '../cards/LibraryCard';


const getData = async () => {
  try{
const response = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching data:", error);
    return [];
  }
};


const Library = async() => {

    const cardData = await getData()
    // console.log(cardData)

    return (
        <div className="container mx-auto">
            <div className="mx-10">
                <h1 className="text-white text-3xl font-bold font-oswald">THE LIBRARY</h1>
            <p className="text-gray-400 text-sm mt-1 font-inter">Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
                {
                    cardData.map((data, idx) => <LibraryCard key={idx} data={data} ></LibraryCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Library;