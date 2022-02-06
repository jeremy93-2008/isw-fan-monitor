import React, { useContext, useEffect } from 'react'
import { FaFan } from 'react-icons/fa'
import {
    Container,
    LittleContainer,
    MainContainer,
} from './components/container.styled'
import {
    Gauge,
    InnerGauge,
    LittleGauge,
    InnerLittleGauge,
} from './components/gauge.styled'
import { FanContext, IFanContext } from './provider/FanProvider'

export function App() {
    const context = null // useContext(FanContext)
    const a = context ? (context as IFanContext).realtime_cpu_temp : null
    return (
        <MainContainer>
            <Container style={{ marginBottom: 16 }}>
                <h2>
                    <FaFan /> ISW Fan Control
                </h2>
            </Container>
            <Container>
                <Gauge>
                    <InnerGauge>
                        {context
                            ? (context as IFanContext).realtime_cpu_temp
                            : '63°C'}
                    </InnerGauge>
                </Gauge>
                <Gauge>
                    <InnerGauge>
                        {context
                            ? (context as IFanContext).realtime_gpu_temp
                            : '60°C'}
                    </InnerGauge>
                </Gauge>
            </Container>
            <LittleContainer>
                <LittleGauge>
                    <InnerLittleGauge>
                        {context
                            ? (context as IFanContext).realtime_cpu_fan_rpm
                            : '3648RPM'}
                    </InnerLittleGauge>
                </LittleGauge>
                <LittleGauge>
                    <InnerLittleGauge>
                        {context
                            ? (context as IFanContext).realtime_gpu_fan_rpm
                            : '4648RPM'}
                    </InnerLittleGauge>
                </LittleGauge>
            </LittleContainer>
        </MainContainer>
    )
}
