import React from 'react';
import RepositoryCard from './RepositoryCard';

const RepositoryGrid = ({ reposFilter }) => {
    return (
        <div className='repository-cards-grid'>
            {reposFilter.map((repository) => (
                <RepositoryCard key={repository.id} repository={repository} />
            ))}
        </div>
    )
}

export default RepositoryGrid;
