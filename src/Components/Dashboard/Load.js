import React from 'react'
import '../../Css/Dashboard/Menu.css'
import Loader from 'react-loader-spinner'
function Load() {
    return (
     <div>
            <div className="Loader_div">
                    < Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100} />
                </div>
                </div>
    )
}

export default Load
