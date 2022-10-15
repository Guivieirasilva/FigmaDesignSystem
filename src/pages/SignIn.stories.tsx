import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Signin } from './Signin'

export default {
   title: 'pages/Sign in',
   component: Signin,
   args:{},
   argTypes: {}
   
} as Meta

export const Default: StoryObj = {
   play: async ({canvasElement}) => {
      const canvas = within(canvasElement)

      userEvent.type(canvas.getByPlaceholderText('Digite seu Email'), 'Guilhermevieira@gui.com')
      userEvent.type(canvas.getByPlaceholderText('********'), '123456789')

      userEvent.click(canvas.getByRole('button'))

      await waitFor(() => {
         return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
         
      })

   }
}
