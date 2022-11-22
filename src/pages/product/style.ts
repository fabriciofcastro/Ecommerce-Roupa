import Link from 'next/link';
import styled from 'styled-components';


export const Container = styled.div`
    padding: 1rem;
`;


export const Linkk = styled(Link).attrs({

})`

`

export const DivBack = styled.div.attrs({
  className: 'py-2 '
})`

`

export const DivGrid  = styled.div.attrs({
  className: 'grid md:grid-cols-4 md:gap-3'
})`

`

export const BoxCard = styled.div`
  box-shadow: inset.2rem .2rem 2rem #c1c1c1;
  border-radius: .2rem;
`

export const Button = styled.button`
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