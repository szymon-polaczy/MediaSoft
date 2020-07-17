import React from 'react'
import MainMenu from './Header'
import MainFooter from './Footer'

export default ({children}) => {
    return (
        <>
            <MainMenu/>
            <main>
                {children}
            </main>
            <MainFooter/>
        </>
    )
}