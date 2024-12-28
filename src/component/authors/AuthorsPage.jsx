import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
export default function AuthorsPage(props) {
const {slug}=useParams();

const response=useQuery(GET_AUTHOR_INFO,{
  variables:{slug}
})


  return (
    <div>
      author page
    </div>
  )
}
