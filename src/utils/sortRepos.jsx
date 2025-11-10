
const sortRepos = (repositoriesList, debounceSearchTerm, sortOption, sorters) => {
    const q = (debounceSearchTerm ?? '').trim().toLowerCase();

    const filtered = q
        ? repositoriesList.filter(r => (r.name ?? '').toLowerCase().includes(q))
        : repositoriesList;

    const sorter = sorters[sortOption];
    return sorter ? [...filtered].sort(sorter) : filtered;
};

export default sortRepos;
