
import { LoaderFunctionArgs } from "react-router";

interface LoaderParams { // create new interface for params
    id: string;
}

export const jobLoader = async ({ params }: LoaderFunctionArgs<LoaderParams>) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

