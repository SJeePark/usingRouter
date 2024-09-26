import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams()  //파라미터 값 호출 | 파라미터 값을 직접적으로도 사용 가능
  return (
    <div>
      <h1>product detail {id}</h1>
    </div>
  )
}

export default ProductDetail

//주소에서' ?q= ' 형태를 쿼리라고 한다. 추가적 조건과 정보를 읽어올 때 사용