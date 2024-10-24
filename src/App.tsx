
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPages from './pages/JobsPages';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import { jobLoader } from './pages/jobloadet';
import AddJobPage from './pages/AddJobPage';
import { JobFields } from './interfaces';
import EditJobPage from './pages/EditJobPage';

const App = () => {

  const addJob = async (newJob: JobFields) => {
    console.log(`GK newJob: ${newJob}`)
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return res
  }

  const deleteJob = async (id: string) => {
    console.log(`Deleting Job id: <${id}>`);


    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',

    });
    return res

  }

  const updateJob = async (job: JobFields) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return res
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >,
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPages />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />

  )
}

export default App