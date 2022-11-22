import * as S from './style'
import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  children: any

}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{ title ? title + '- Fabricio' : 'Catro' }</title>
        <meta name='description' content='Em breve ecommerce' />
        <link rel='icon' href='' />
      </Head>
      <S.Container >
        <S.Header >
          <S.Nav>
            <S.Linkk href="/cart" >
              Amazonas
            </S.Linkk>
            <div>
              <S.Linkk href="/Login" >
                Cart
              </S.Linkk>
              <S.Linkk href="/" >
                Login
              </S.Linkk>
            </div>
          </S.Nav>
        </S.Header>
        <main>{ children }</main>
        <S.Footer>
          <p>Copyright 2022 Amazona</p>
        </S.Footer>
      </S.Container>
    </>
  )
}

export default Layout
