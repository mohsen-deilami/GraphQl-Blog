import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_Comments } from '../../graphql/queries'
export default function Comments({slug}) {
       console.log(slug)
       const {loading , data , error}=useQuery(GET_POST_Comments ,{

           variables:{slug}
       }
       )
       console.log(data);
       
  return (
    <div>
      comments
    </div>
  )
}
