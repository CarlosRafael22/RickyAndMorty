import styled, { css } from 'styled-components'
import { ProfileHeaderProps } from '.'

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

type showAsType = Pick<ProfileHeaderProps, 'showAs'>

export const ProfileImage = styled.img<showAsType>`
    width: 100%;
    height: 14rem;
    border-radius: ${({ showAs }) => showAs === 'card' ? '0.5rem 0.5rem 0 0' : '0'};
    order: ${({ showAs }) => showAs === 'card' ? '1' : '2'};
`

export const InfoSectionStyle = styled.div<showAsType>`
    padding: 1rem;
    order: ${({ showAs }) => showAs === 'card' ? '2' : '1'};
`

export const TitleStyle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`

export const SubtitleStyle = styled.h4`
    margin: 0;
`
type StatusProps = Pick<ProfileHeaderProps, 'status'>

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