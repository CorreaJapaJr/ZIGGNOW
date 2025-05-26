

export const API_URl = 'https://dogsapi.origamid.dev/json'

export function TOKEN_POST (body){
    return {
        url: API_URl + '/jwt=ath/v1/token',
       method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    }



    export function USER_GET (token){
         return {
        url: API_URl + '/api/user',
       method: 'GET',
        headers: {
          Authorization: 'Bearer' + token,
        }
      }
    }
    