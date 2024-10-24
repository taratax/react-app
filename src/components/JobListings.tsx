
import { useEffect, useState } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';
import { JobFields } from '../interfaces';


export const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState<JobFields[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            try {
                const res = await fetch(apiUrl);
                if (res.ok) {
                    const data = await res.json()
                    setJobs(data)
                } else {
                    throw new Error("GK problem fetching jobs")
                }

            } catch (e) {
                throw new Error(`GK Error catching res not OK ${e}`)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()

    }, [])



    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'All Jobs'}
                </h2>

                {loading ? (<Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map(job => (
                            <JobListing
                                jobtitle={job.title}
                                description={job.description}
                                type={job.type}
                                location={job.location}
                                salary={job.salary}
                                id={job.id}
                            />

                        ))}
                    </div>
                )}
            </div>
        </section >
    )
}
