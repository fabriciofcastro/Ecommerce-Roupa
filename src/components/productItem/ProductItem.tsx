import React from 'react'
import * as S from './style'

const ProductItem = ({ product }: any) => {
  return (
    <S.Container>
      <S.Cart>
        <S.Linkk href={ `/product/${product.slug}` } >
          <S.ProductImg src={ product.image } alt={product.name} />
        </S.Linkk>

        <div className='flex flex-col items-center justify-center p-5'>
          <S.Linkk href={ `/product/${product.slug}` } >
            <h2 className='text-lg'>`{ product.name }</h2>
          </S.Linkk>
          <p className='mb-2'>{ product.brand }</p>
          <p>${ product.price }</p>
          <S.ButtonProducts className='primary-button' type='button'>
            Add to cart
          </S.ButtonProducts>
        </div>

      </S.Cart>
    </S.Container>
  )
}

export default ProductItem
