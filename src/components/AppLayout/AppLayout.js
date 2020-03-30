import React from 'react'
import MainMenu from './Menu'
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