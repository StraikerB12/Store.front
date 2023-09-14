import { gql } from 'graphql-tag'


export const postsGet = gql`
    query postsGet ($first: Int!, $page: Int!) {
        posts(first: $first, page: $page) {
            data {
                source
                name
                id
                create_date
                channel_name
                channel_img
                tags {
                    color
                    id
                    img
                    name
                }
            }
            paginatorInfo {
                total
            }
        }
    }
`

export const getDataKeys = gql`
    query getDataKeys {
        getKeys {
            data
            type
        }
    }
`

export const getAuthVK = gql`
    mutation getAuthVK ($code: String!, $redirectUri: String!) {
        authVK(code: $code, redirect_uri: $redirectUri) {
            access_token
            error
            error_description
            expires_in
            user_id
        }
    }
`