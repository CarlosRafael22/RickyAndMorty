import { Story, Meta } from '@storybook/react'
import LocationSection, { LocationSectionProps }  from '.'

export default {
    title: 'LocationSection',
    component: LocationSection
} as Meta

const Template: Story<LocationSectionProps> = args => (
    <div style={{width: '50%', margin: '0 auto'}}>
        <LocationSection {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = { 
    title: 'Origin',
    name: 'Earth',
    type: 'Planet',
    dimension: 'Alien',
    numberOfResidents: 52
}