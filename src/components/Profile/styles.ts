import styled, { css } from 'styled-components'
import { ProfileProps } from '.'

export const ProfileStyle = styled.article`
    color: #fff;
    border-radius: 8px;
    width: 20rem;
    height: 20rem;
    background-color: #e1dad3;
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