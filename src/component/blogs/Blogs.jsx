import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from '../../graphql/queries';

export default function Blogs() {
 const  {loading , data , error}=useQuery(GET_BLOGS_INFO)  
 if(loading)return <h4>Loading...</h4>
 if(error)return <h4>error...</h4>
 console.log(data);
  return (
    <div>
      Blogs
    </div>
  )
}
