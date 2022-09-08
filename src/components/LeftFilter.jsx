import React,{ useState, useEffect } from 'react';
import '../assets/css/LeftFilter.css';

const LeftFilter = () => {
        const [isTablet, setIsTablet] = useState(false);
    
        useEffect(() => {
            window.addEventListener("resize", () => {
                const istablet = window.innerWidth < 768;
                if (istablet !== isTablet) setIsTablet(istablet);
            }, false);
        }, [isTablet]);
    
    return(
        <div id="sidebarMenu" className={`${isTablet ? "leftFilter sidebar collapse" : "leftFilter sidebar"}`} data-bs-hidden="false">
                <div className="innerFilter bg-white bg-opacity-10 rounded border border-white mx-auto my-3 text-center">
                        <div className="dropdown">
                            <div className="text-white">
                                Filters
                                <i className="bi bi-filter text-success px-2"></i>
                            </div>
                            <hr className="w-75 m-0 mx-auto border"/>
                        </div>

                    {/* <div className="dropdown my-3">
                        <button className="btn rounded-pill bg-transparent bg-opacity-10 border text-white dropdown-toggle w-75" type="button" id="dropdownMenu2" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Price
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Random 1</button>
                            <button className="dropdown-item" type="button">Random 2</button>
                            <button className="dropdown-item" type="button">Random 3</button>
                        </div>
                    </div> */}
                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white collapseBtn bg-black bg-opacity-25 collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#priceCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Price
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="priceCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">

                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#backgroundCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Background
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="backgroundCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">

                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#furCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Fur
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="furCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn show border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#themeCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Theme
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0 show" id="themeCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body my-0 bg-black bg-opacity-25 d-flex flex-column justify-content-center">
                                <div className="input-group rounded-pill border border-white mt-0">
                                    <span className="input-group-text border-0 bg-transparent" id="search-addon">
                                        <i className="bi bi-search text-success"></i>
                                    </span>
                                    <input id="themeSearch" type="search" className="searchBarCollections border-0 shadow-none form-control rounded-pill bg-transparent bg-opacity-10" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <div className="d-flex justify-content-between text-white my-2">
                                    <span className="searchSpan">
                                        Spooky
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input border" type="checkbox" value="spooky" id="flexCheckDefault" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between text-white my-2">
                                    <span className="searchSpan">
                                        Winter
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input border" type="checkbox" value="winter" id="flexCheckDefault" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between text-white my-2">
                                    <span className="searchSpan">
                                        Green
                                    </span>
                                    <div className="my-0">
                                        <span className="mx-2">9</span>
                                        <input className="form-check-input border" type="checkbox" value="green" id="flexCheckDefault" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#statusCollapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Status
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="statusCollapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample1Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 1
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="sample1Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample2Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 2
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="sample2Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>

                    <div className="d-flex filterBtn w-75 rounded flex-column mx-4 border border-white mx-auto my-3 text-center">
                        <button className="btn text-white bg-black bg-opacity-25 collapseBtn collapsed border-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sample3Collapse" aria-expanded="false" aria-controls="collapseExample">
                            <span></span>
                            Sample 3
                            <i className="bi bi-chevron-up text-white menu-icon-right"></i>
                        </button>
                        <div className="collapse my-0" id="sample3Collapse">
                            <hr className="w-75 text-white m-0 mx-auto"/>
                            <div className="card card-body bg-black bg-opacity-25 my-0 d-flex flex-row justify-content-center">
                            
                            </div>
                        </div>
                    </div>
                    

                </div>
                </div>
    );
}

export default LeftFilter;