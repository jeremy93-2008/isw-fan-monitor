import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { FanProvider } from './provider/FanProvider'

render(
    <FanProvider>
        <App />
    </FanProvider>,
    document.getElementById('app')
)
