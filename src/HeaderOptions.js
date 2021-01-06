import React from 'react'
import "./HeaderOptions.css"

function HeaderOptions({Icon, title}) {
    return (
        <div className="headerOptions">
            {Icon && <Icon className='headeroptions_icon' />}
            <h3 className="headeroptions_title">{ title }</h3>
        </div>
    )
}

export default HeaderOptions
