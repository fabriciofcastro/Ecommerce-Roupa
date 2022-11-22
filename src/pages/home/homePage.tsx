import Layout from 'components/Layout'
import ProductItem from 'components/productItem/ProductItem'
import React from 'react'
import * as S from './style'
import data, { ProductsProps } from '../../../utils/data'

const HomePage: React.FC<ProductsProps> = () => {

  return (
    <>
      <Layout title='Home Page'>
        <S.Container className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {
            data.products.map((product) => (
              <ProductItem product={ product } key={ product.slug }>

              </ProductItem>
            ))
          }
        </S.Container>
      </Layout>

    </>

  )
}

export default HomePage

