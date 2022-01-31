import React, { useContext } from 'react'
import { FanContext, IFanContext } from './provider/FanProvider'

export function App() {
    const context = useContext(FanContext)
    return (
        <div>{context ? (context as IFanContext).realtime_cpu_temp : null}</div>
    )
}
