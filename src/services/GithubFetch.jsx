const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.github.com/orgs/google/repos?per_page=100';
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const GithubFetch = async () => {
    const response = await fetch(API_BASE_URL, API_OPTIONS);
    if (!response.ok) throw new Error('Failed to fetch Repos');
    return response.json();
}

export default GithubFetch
