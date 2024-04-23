import React, { useEffect } from 'react'

function Dashboard() {
    const getCategories = async () => {
        const response = await fetch('https://library-crud-sample.vercel.app/api/category')
        const result = await response.json()
        console.log('response categories', result)
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard