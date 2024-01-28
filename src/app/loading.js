import React from 'react';
import loading from '../../public/Animation - 1706461004739.gif'
import Image from "next/image";

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center sm:mt-20 mt-10">
                <Image src={loading} alt="" className="bg-transparent"/>
            </div>
        </div>
    );
};

export default Loading;