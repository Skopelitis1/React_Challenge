import React from 'react'

const RepositoryCard = ({ repository: { name, stargazers_count, description, html_url, id } }) => {
    return (
        <div className='repository-card h-[270px]'>
            <div>
                <div className='popularity'>
                    {stargazers_count > 1000
                        ? <img src='popular.svg' alt="Popular" className="h-3 w-3" />
                        : <img src='unpopular.svg' alt="Not popular" className="h-3 w-3" />}
                </div>
                <h3>{name}</h3>
                <div className='content'>
                    <div className='rating'>
                        <img src='star.svg' alt="Star Icon" />
                        <p>{stargazers_count}</p>
                    </div>
                    <p className='description'>{description}</p>
                </div>
            </div>
            <a href={html_url} target="_blank" rel="noreferrer">View repo</a>
        </div>
    )
}

export default RepositoryCard;
