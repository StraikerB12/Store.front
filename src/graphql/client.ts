import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export default new ApolloClient( {
    link: new HttpLink({
        uri: 'http://back.store.localhost/api',
        fetchOptions: {
            mode: 'cors'
        }
    }),
    cache: new InMemoryCache(),
    // fetchOptions: {}
    // headers: {
    //     "Origin": "http://des-star.ru"
    // }
})