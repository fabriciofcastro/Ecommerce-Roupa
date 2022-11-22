import Link from 'next/link';
import styled from 'styled-components';


export const Container = styled.div.attrs({

})`

`

export const Cart = styled.div.attrs({

})`
`

export const Linkk = styled(Link).attrs({

})`

`

export const ProductImg = styled.img.attrs({
  className: 'rounded shadow'
})`

`

export const ButtonProducts = styled.button.attrs({
 
})`
    background-color: #fdf907;
    padding: .8rem 1.8rem;
    outline: none;
    box-shadow: .1rem .3rem 1rem #bbaf03;
    border-radius: .5rem;


      &:hover {
        background-color: #d4d100;

      }

      &:active {
        background-color: #fbff17;
      }
`