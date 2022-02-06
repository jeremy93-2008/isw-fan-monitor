import styled from 'styled-components'

export const Gauge = styled.div`
    width: 30vw;
    height: 30vw;
    border: solid 2px white;
    background: #3181cc;
    border-radius: 50%;
`
export const InnerGauge = styled.div`
    width: 22vw;
    height: 22vw;
    background: linear-gradient(#15395b, #0c2135);
    border: solid 2px white;
    border-radius: 50%;
    left: 3.8vw;
    top: 4.8vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LittleGauge = styled.div`
    width: 20vw;
    height: 20vw;
    background: #3181cc;
    border: solid 2px white;
    border-radius: 50%;
`
export const InnerLittleGauge = styled.div`
    width: 12vw;
    height: 12vw;
    border: solid 2px white;
    background: linear-gradient(#15395b, #0c2135);
    border-radius: 50%;
    left: 3.8vw;
    top: 5.3vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
