import React, { createContext, useEffect, useState } from 'react'

export interface IFanContext {
    realtime_cpu_temp: string
    realtime_cpu_fan_speed: string
    realtime_cpu_fan_rpm: string
    realtime_gpu_temp: string
    realtime_gpu_fan_speed: string
    realtime_gpu_fan_rpm: string
}

export const FanContext = createContext<IFanContext | {}>({})

export function FanProvider(props: { children: any }) {
    const [info, setInfo] = useState({})

    useEffect(() => {
        //;(window as any).api.getMSIInfo()
        const interval = setInterval(() => {
            const value = (
                document.getElementById('MSIInfo') as HTMLInputElement
            ).value
            const [cpu, gpu] = value.split(';')
            const [
                realtime_cpu_temp,
                realtime_cpu_fan_speed,
                realtime_cpu_fan_rpm,
            ] = cpu.split(',')
            const [
                realtime_gpu_temp,
                realtime_gpu_fan_speed,
                realtime_gpu_fan_rpm,
            ] = gpu.split(',')
            setInfo({
                realtime_cpu_temp,
                realtime_cpu_fan_speed,
                realtime_cpu_fan_rpm,
                realtime_gpu_temp,
                realtime_gpu_fan_speed,
                realtime_gpu_fan_rpm,
            })
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <FanContext.Provider value={info}>{props.children}</FanContext.Provider>
    )
}
