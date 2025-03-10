import axios from 'axios';

export const fetchGitHubRepos = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        return [];
    }
};
