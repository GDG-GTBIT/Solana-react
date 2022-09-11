import React from 'react';
import '../assets/css/CollectionsFilter.css';


const CollectionsFilter = () => {

    return(
        <div className="bg-black bg-opacity-50">
            <div className="topFilter mx-auto py-3">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-grid-fill fa-md text-white" style={{fontSize: "20px"}}></i>
                </button>
                <div className="input-group inputTop bg-transparent rounded-pill border border-white">
                    <span className="input-group-text border-0 bg-transparent" id="search-addon">
                        <i className="bi bi-search text-success"></i>
                    </span>
                    <input id="topSearch" type="search" className="searchBarCollections border-0 shadow-none form-control rounded-pill bg-transparent bg-opacity-10" placeholder="Search Collectibles" aria-label="Search" aria-describedby="search-addon" />
                </div>

                <div className="dropdown">
                    
                    <button className="btn rounded-pill bg-transparent bg-opacity-10 border text-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i className="bi bi-arrow-down-up text-success px-2"></i>
                        Sort By
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Random 1</button>
                        <button className="dropdown-item" type="button">Random 2</button>
                        <button className="dropdown-item" type="button">Random 3</button>
                    </div>
                </div>
            </div>
            {/* <div className="container"> */}
            
                {/* <CardArea />
            </div> */}
        </div>
    );
}

export default CollectionsFilter;