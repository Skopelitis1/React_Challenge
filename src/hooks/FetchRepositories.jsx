import { useEffect, useState } from "react";
import normalizeRepo from "../utils/normalizeRepo";
import GithubFetch from "../services/GithubFetch";

const FetchRepositories = () => {
    const [repositoriesList, setRepositoriesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRepositories = async () => {
            setIsLoading(true)

            try {
                const data = await GithubFetch();
                const normalize = (Array.isArray(data) ? data : []).map(normalizeRepo);
                setRepositoriesList(normalize) //accepts  only array data
            } catch (error) {
                console.error(`Error fetching repositories: ${error}`);
                setError(error);
            } finally {
                setIsLoading(false)
            }
        };
        fetchRepositories();
    }, []);

    return { repositoriesList, isLoading, error };
}

export default FetchRepositories;
