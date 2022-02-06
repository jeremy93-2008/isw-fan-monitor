import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { FanProvider } from './provider/FanProvider'
import './global.css'

render(
    <FanProvider>
        <App />
    </FanProvider>,
    document.getElementById('app')
)
