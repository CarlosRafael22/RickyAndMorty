import styled, { css } from 'styled-components'
import { ProfileProps } from '.'

export const ProfileStyle = styled.article`
    color: #fff;
    border-radius: 0.5rem;
    width: 20rem;
    background-color: hsla(0,0%,0%,0.8);
    margin: 1rem;
`

export const ProfileImage = styled.img`
    width: 100%;
    height: 14rem;
    border-radius: 0.5rem 0.5rem 0 0;
`

export const InfoSectionStyle = styled.div`
    padding: 1rem;
`

export const TitleStyle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`

export const SubtitleStyle = styled.h4`
    margin: 0;
`

type StatusProps = Pick<ProfileProps, 'status'>

export const StatusIndicatorStyle = styled.span<StatusProps>`
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    display: inline-block;
    background-color: ${({ status }) => {
        if (status === 'Alive') return css`green;`
        if (status === 'Dead') return css`red;`
        if (status === 'unknown') return css`yellow;`
    }}
`

export const LocationSectionStyle = styled.div`
    padding: 1rem;
`