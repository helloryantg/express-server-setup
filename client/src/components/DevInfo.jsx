import React from 'react'
import './DevInfo.scss'

const DevInfo = ({
    name,
    age,
    job,
    portfolioUrl
}) => (
    <div className="DevInfo">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Job: {job}</div>
        <a href={portfolioUrl} target="_blank">Portfolio</a>
    </div>
)

export default DevInfo