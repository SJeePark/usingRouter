import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Productpage = () => {
  let [query, setQuery] = useSearchParams();  //useSearchParams: 쿼리값 호출
  console.log(query.get('q'));  //query안에 있는 'q'쿼리를 get으로 불러들인다. 
  return (
    <div>
      <h1>Show all Product</h1>
    </div>
  )
}

export default Productpage
