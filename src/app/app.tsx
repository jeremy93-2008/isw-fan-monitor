import React, { useContext } from 'react'
import { FaFan } from 'react-icons/fa'
import { FiCpu } from 'react-icons/fi'
import { SiNvidia } from 'react-icons/si'
import {
    Container,
    LittleContainer,
    MainContainer,
} from './components/container.styled'
import {
    Gauge,
    InnerGauge,
    InnerLittleGauge,
    LittleGauge,
} from './components/gauge.styled'
import { FanContext, IFanContext } from './provider/FanProvider'

export function App() {
    const context = useContext(FanContext)
    const a = context ? (context as IFanContext).realtime_cpu_temp : null
    return (
        <MainContainer>
            <Container style={{ marginBottom: 16 }}>
                <h2>
                    <FaFan /> ISW Fan Monitor
                </h2>
            </Container>
            <Container>
                <Gauge>
                    <InnerGauge>
                        <div
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <div style={{ fontSize: '24px', marginBottom: 10 }}>
                                <FiCpu />
                            </div>
                            <div style={{ fontSize: '20px', marginBottom: 8 }}>
                                CPU
                            </div>
                            <div>
                                {context &&
                                (context as IFanContext).realtime_cpu_temp
                                    ? (context as IFanContext).realtime_cpu_temp
                                    : '--°C'}
                            </div>
                        </div>
                    </InnerGauge>
                </Gauge>
                <Gauge>
                    <InnerGauge>
                        <div
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <div style={{ fontSize: '24px', marginBottom: 10 }}>
                                <SiNvidia />
                            </div>
                            <div style={{ fontSize: '20px', marginBottom: 8 }}>
                                GPU
                            </div>
                            <div>
                                {context &&
                                (context as IFanContext).realtime_gpu_temp
                                    ? (context as IFanContext).realtime_gpu_temp
                                    : '--°C'}
                            </div>
                        </div>
                    </InnerGauge>
                </Gauge>
            </Container>
            <LittleContainer>
                <LittleGauge>
                    <InnerLittleGauge>
                        <div
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <div style={{ fontSize: '20px', marginBottom: 8 }}>
                                Fan
                            </div>
                            <div style={{ fontSize: 14 }}>
                                {context &&
                                (context as IFanContext).realtime_cpu_fan_rpm
                                    ? (context as IFanContext)
                                          .realtime_cpu_fan_rpm
                                    : '---- RPM'}
                            </div>
                        </div>
                    </InnerLittleGauge>
                </LittleGauge>
                <LittleGauge>
                    <InnerLittleGauge>
                        <div
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <div style={{ fontSize: '20px', marginBottom: 8 }}>
                                Fan
                            </div>
                            <div style={{ fontSize: 14 }}>
                                {context &&
                                (context as IFanContext).realtime_gpu_fan_rpm
                                    ? (context as IFanContext)
                                          .realtime_gpu_fan_rpm
                                    : '---- RPM'}
                            </div>
                        </div>
                    </InnerLittleGauge>
                </LittleGauge>
            </LittleContainer>
        </MainContainer>
    )
}
