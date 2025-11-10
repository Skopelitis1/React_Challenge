import React from 'react'

const FilteringMenu = ({ sortOption, setSortOption }) => {
    return (
        <>
            <ul className='filterMenu-ul'>
                <li className="w-full">
                    <button
                        className={`filterMenu-li
                     ${sortOption === 'default'
                                ? 'filterMenu-li--active'
                                : 'filterMenu-li--inactive '
                            }`}
                        onClick={() => { setSortOption('default') }}>Default</button>

                </li>
                <li className="w-full">
                    <button
                        className={`filterMenu-li
                     ${sortOption === 'name'
                                ? 'filterMenu-li--active'
                                : 'filterMenu-li--inactive '
                            }`}
                        onClick={() => { setSortOption('name') }}>A - Z</button>
                </li>
                <li className="w-full">
                    <button
                        className={`filterMenu-li
                     ${sortOption === 'stars'
                                ? 'filterMenu-li--active'
                                : 'filterMenu-li--inactive '
                            }`}
                        onClick={() => { setSortOption('stars') }}>Stars</button>
                </li>
            </ul >
        </>
    )
}

export default FilteringMenu;
