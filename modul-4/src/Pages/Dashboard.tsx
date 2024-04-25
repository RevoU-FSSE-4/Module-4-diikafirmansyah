import React, { useEffect } from 'react'

function Dashboard() {
    const createCategories = async () => {
        const response = await fetch('https://library-crud-sample.vercel.app/api/category/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                "category_name": "Car",
                "category_description": "Racing Car",
                "is_active": true
            })
        })
        // const result = await response.json()
        console.log('response categories', response)
    }
    const getCategories = async () => {
        const response = await fetch('https://library-crud-sample.vercel.app/api/category', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${localStorage.getItem('token')}`,
            },
        })
        // const result = await response.json()
        console.log('response categories', response)
    }

    useEffect(() => {
        // createCategories()
        getCategories()
    }, [])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard