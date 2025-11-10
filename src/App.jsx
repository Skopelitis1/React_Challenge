import React from 'react'
import { useState, useEffect } from 'react'
import { useDebounce } from 'react-use'
import LoadingIcon from './components/LoadingIcon';
import Search from './components/Search';
import FilteringMenu from './components/FilteringMenu';
import RepositoryGrid from './components/RepositoryGrid';
import sortRepos from './utils/sortRepos';
import FetchRepositories from './hooks/FetchRepositories';


//sorting options 
const sorters = {
  default: null,
  name: (a, b) => (a.name || '').localeCompare(b.name || ''),
  stars: (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0),
};

const App = () => {

  const [sortOption, setSortOption] = useState('default');
  const [searchTerm, setSearchTerm] = useState('')
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('')

  //search debounce
  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm])

  //fething reposirotires
  const { repositoriesList, isLoading, error } = FetchRepositories();

  //sorting
  const reposFilter = sortRepos(repositoriesList, debounceSearchTerm, sortOption, sorters);

  //render
  return (
    <main>
      <div className='page-bg ' />
      <div className='container'>

        <header>
          <h1 className='title'>Welcome to Repositories Library</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilteringMenu sortOption={sortOption} setSortOption={setSortOption} />
        </header>

        <section>
          {isLoading && <LoadingIcon />}
          {error && <p className='error-render'>Error occured while fetching the data</p>}
          {!isLoading && reposFilter.length === 0 && <p className='error-render'>No repositories found.</p>}
          {!isLoading && reposFilter.length > 0 && <RepositoryGrid reposFilter={reposFilter} />}
        </section>

      </div>
    </main>
  )
}

export default App;





