import { ThemeProvider } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  },
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle',
      items: ['light', 'dark'],
    },
  },
}
