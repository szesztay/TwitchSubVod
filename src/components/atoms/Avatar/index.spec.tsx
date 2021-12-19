import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Avatar from '.'
import 'jest-styled-components'

describe('Avatar component', () => {
  const title = 'Mr. Cow'
  const src =
    'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-150x150.jpeg'

  it('should render correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Avatar title={title} src={src} />
      </ThemeProvider>,
    )

    const avatar = screen.getByRole('img', { name: title })

    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveStyleRule('width', '100%')
    expect(avatar).toHaveStyleRule('height', '100%')
    expect(avatar).toHaveStyleRule('object-fit', 'cover')
    expect(avatar).toHaveStyleRule('border-radius', '50%')
    expect(avatar).toHaveStyleRule('overflow', 'hidden')
  })

  it('should render correctly with custom width', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Avatar title={title} src={src} width={'200px'} />
      </ThemeProvider>,
    )

    const avatar = screen.getByRole('img', { name: title })

    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveStyleRule('width', '200px')
    expect(avatar).toHaveStyleRule('height', '200px')
    expect(avatar).toHaveStyleRule('object-fit', 'cover')
    expect(avatar).toHaveStyleRule('border-radius', '50%')
    expect(avatar).toHaveStyleRule('overflow', 'hidden')
  })
})
