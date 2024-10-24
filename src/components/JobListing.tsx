import { PropsWithChildren, useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom';

interface JobListingProps {
    jobtitle: string,
    description: string,
    type: string,
    location: string,
    salary: string,
    id: string
}

const JobListing = ({ jobtitle,
    description,
    type,
    location,
    salary,
    id }: PropsWithChildren<JobListingProps>) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let desc = description;
    console.log(`GK location ${location}`)
    if (!showFullDescription) {
        desc = desc.substring(0, 90) + '...';
    }
    return (
        <div id={`${id}`} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{type}</div>
                    <h3 className="text-xl font-bold">{jobtitle}</h3>
                </div>

                <div className="mb-5">
                    {desc}
                </div>
                <button onClick={() => setShowFullDescription(prev => !prev)} className='text-indigo-500 mb-5 hover:text-indigo-600'>{showFullDescription ? 'Less' : 'More'}</button>

                <h3 className="text-indigo-500 mb-2">{salary}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1' />
                        {location}
                    </div>
                    <Link
                        to={`/jobs/${id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing