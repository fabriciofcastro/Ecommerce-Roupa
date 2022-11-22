import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import Link from 'next/link'


export const Container = styled.div.attrs<HTMLDivElement>({
  className: 'flex min-h-screen flex-col justify-between'
})`


`

export const Header = styled.header.attrs<HTMLElement>({
  className: ''
})`


`

export const Nav = styled.nav.attrs<HTMLElement>({
  className: 'flex h-12 justify-between shadow-md items-center'
})`


`

export const Linkk = styled(Link).attrs({
  className: 'text-lg font-bold p-2'
})`

  

`
export const Main =styled.main.attrs({
  className: 'container m-auto mt-4 px-4'
})`


`
export const Footer = styled.footer.attrs({
  className: 'flex h-10 justify-center items-center shadow-inner'
})`


`