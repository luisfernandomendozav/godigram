"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Error from 'next/error'
import { Score } from '../types/Polloteria'

function LoginForm() {
    const [scores, setScores] = useState([])
    const [error, setError] = useState('')
    
    const fetchScores = async () => {
        try {
            const res = await axios.get('/api/auth/score')
            setScores(res.data.message)
            console.log(res)
        } catch (error: any) {
            setError(error.response.data.message)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchScores()
    }, [])
    return (
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mt-40'>
            {scores.map((el: Score) => {
                return (
                    <>
                        <h1 className='block text-lg font-bold mb-2 text-green-700'>{`${el.username} ${el.score}`}</h1>
                    </>
                )
            })}
        </div>
        
        
    )
}

export default LoginForm