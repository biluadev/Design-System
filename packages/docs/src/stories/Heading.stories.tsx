import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,

    args: {
        size: 'md',
        children: 'Custom title',
    },

    argTypes: {
        size: {
            options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
            control: {
                type: 'inline-radio',
            },
        },
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
    parameters: {
        docs: {
            description: {
                story: 
                'To default the Heading will be a `h2`, but we can change it with a propriety `as`.',
            }
        }
    }
}
