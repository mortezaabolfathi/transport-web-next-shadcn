import { itemCardHomePage } from '@/data/cardItemInHomePage'
import React from 'react'
export async function generateStaticParams () {
  return itemCardHomePage.map(item=>item.id)
}
const DetailCardItem = ({ params }:any) => {
  const {id} = params
  return (
    <div>DetailCardItem</div>
  )
}



export default DetailCardItem