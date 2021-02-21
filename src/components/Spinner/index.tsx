import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid black;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  
    animation: ${spin} 1s linear infinite;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const LoadingSpinner = () => (
    <Wrapper>
        <Spinner />
    </Wrapper>
)

export default LoadingSpinner