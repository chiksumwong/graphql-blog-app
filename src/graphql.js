/* 
   用於處理所有GraphQL查詢和變更的全局文件
 */
import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
    mutation SignupMutation($name: String!, $email: String!, $password: String!) {
        createUser(
            name: $name,
            email: $email,
            password: $password
        ) {
            id
            name
            email
        }
    }
`