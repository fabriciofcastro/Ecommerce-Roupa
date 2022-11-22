import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import data from '../../../utils/data'
import Layout from '../../components/Layout'
import * as S from './style'

const Slug = () => {
  const { query } = useRouter()
  const { slug } = query
  console.log(`slug depois query ${slug}`);

  const product = data.products.find((x) => x.slug === slug)
  console.log('produto find ' + product);

  if (!product) {
    return <div>Product Not Found</div>
  }

  const addToCartHandler = () => {
    
  }

  return (
    <Layout title={ product.name }>

      <S.Container>
        <S.DivBack>
          <S.Linkk href="/" >
            Back to product
          </S.Linkk>
        </S.DivBack>
        <S.DivGrid>
          <div className='md:col-span-2'>
            <Image
              src={ product.image }
              alt={ product.name }
              height={ 640 }
              width={ 640 }
              layout="responsive" />
          </div>

          <div>
            <ul>
              <li>
                <h1 className="text-lg">{ product.name }</h1>
              </li>
              <li>Category: { product.category }</li>
              <li>Brand { product.brand }</li>
              <li>{ product.rating } of { product.numReviews } reviwes</li>
              <li>Description: { product.description }</li>
            </ul>
          </div>
          <div>
            <S.BoxCard  className='card p-5'>
              <div className='mb-2 flex justify-between'>
                <div>Price</div>
                <div>${ product.price }</div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>Start</div>
                <div>{ product.countInStock > 0 ? '  I stock' : 'Unavailable' }</div>
              </div>
              <S.Button className='primary-button w-full' onClick={addToCartHandler}>
                Add to cart
              </S.Button>
            </S.BoxCard >
          </div>

        </S.DivGrid>
      </S.Container>


    </Layout >
  )
}

export default Slug
