import { LocationSectionStyle, LocationHeader, LocationInfoSectionStyle, LocationInfo, InfoSpan } from './styles'

export type LocationSectionProps = {
    title: string,
    name: string,
    type: string,
    dimension: string,
    numberOfResidents: number | 'unknown'
}

const LocationSection = ({ title, name, type, dimension, numberOfResidents }: LocationSectionProps) => {

    return (
        <LocationSectionStyle>
            <LocationHeader>{title}</LocationHeader>
            <LocationInfoSectionStyle>
                <LocationInfo><InfoSpan>Name:</InfoSpan> {name}</LocationInfo>
                <LocationInfo><InfoSpan>Type:</InfoSpan> {type}</LocationInfo>
                <LocationInfo><InfoSpan>Dimension:</InfoSpan> {dimension}</LocationInfo>
                <LocationInfo><InfoSpan>Residents:</InfoSpan> {numberOfResidents}</LocationInfo>
            </LocationInfoSectionStyle>
        </LocationSectionStyle>
    )    
}

export default LocationSection