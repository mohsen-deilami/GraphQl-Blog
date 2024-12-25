import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from '../../graphql/queries';
export default function Blogs() {
 const  {loading , data , error}=useQuery(GET_BLOGS_INFO)  
 console.log(data);
 
  return (
    <div>
      
    </div>
  )
}
