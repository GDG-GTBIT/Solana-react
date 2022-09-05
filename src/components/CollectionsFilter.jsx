import React from 'react';
import '../assets/css/collectionsFilter.css';

const CollectionsFilter = () => {
    return(
        <div
        //  className="bg-black"
         >
            <div className="topFilter mx-auto py-3">
                <div class="input-group inputTop bg-transparent bg-opacity-10 rounded-pill border border-white">
                    <span className="input-group-text border-0 bg-transparent bg-opacity-10" id="search-addon">
                        <i className="bi bi-search text-success"></i>
                    </span>
                    <input id="topSearch" type="search" className="searchBarCollections border-0 shadow-none form-control rounded-pill bg-transparent bg-opacity-10" placeholder="Search Collectibles" aria-label="Search" aria-describedby="search-addon" />
                </div>

                <div className="dropdown">
                    
                    <button className="btn rounded-pill bg-transparent bg-opacity-10 border text-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i class="bi bi-arrow-down-up text-success px-2"></i>
                        Sort By
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Random 1</button>
                        <button className="dropdown-item" type="button">Random 2</button>
                        <button className="dropdown-item" type="button">Random 3</button>
                    </div>
                </div>
            </div>

            <div className="leftFilter">
                <div className="innerFilter bg-transparent bg-opacity-10 rounded border border-white mx-auto my-3 text-center">
                    <div className="d-flex mx-4">
                        <div className="dropdown">
                            <button className="btn rounded-pill bg-transparent bg-opacity-10 border text-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="bi bi-filter text-success px-2"></i>
                                Filters
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Random 1</button>
                                <button className="dropdown-item" type="button">Random 2</button>
                                <button className="dropdown-item" type="button">Random 3</button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="dropdown my-3">
                        <button className="btn rounded-pill bg-transparent bg-opacity-10 border text-white dropdown-toggle w-75" type="button" id="dropdownMenu2" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Price
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Random 1</button>
                            <button className="dropdown-item" type="button">Random 2</button>
                            <button className="dropdown-item" type="button">Random 3</button>
                        </div>
                    </div> */}
                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed collapse border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#priceCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Price
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="priceCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">

                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#backgroundCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Background
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="backgroundCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">

                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#furCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Fur
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="furCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#themeCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Theme
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="themeCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-column justify-content-center">
                                <div class="input-group bg-transparent bg-opacity-10 rounded-pill border border-white mt-0">
                                    <span className="input-group-text border-0 bg-transparent bg-opacity-10" id="search-addon">
                                        <i className="bi bi-search text-success"></i>
                                    </span>
                                    <input id="themeSearch" type="search" className="searchBarCollections border-0 shadow-none form-control rounded-pill bg-transparent bg-opacity-10" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <div className="d-flex justify-content-between text-white my-2">
                                    <span>
                                        Spooky
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input bg-transparent bg-opacity-10 border" type="checkbox" value="spooky" id="flexCheckDefault" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between text-white my-2">
                                    <span>
                                        Winter
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input bg-transparent bg-opacity-10 border" type="checkbox" value="winter" id="flexCheckDefault" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between text-white my-2">
                                    <span>
                                        Green
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input bg-transparent bg-opacity-10 border" type="checkbox" value="green" id="flexCheckDefault" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#statusCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Status
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="statusCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample1Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 1
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="sample1Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample2Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 2
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="sample2Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 flex-column mx-4 bg-transparent bg-opacity-10 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample3Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 3
                            <i class="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 bg-transparent bg-opacity-10" id="sample3Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-transparent bg-opacity-10 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CollectionsFilter;