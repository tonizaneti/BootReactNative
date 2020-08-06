import axios from "axios";

export default axios.create({
    baseURL:"http://df6041430203.ngrok.io",
    headers:{
        Authorization: 
        "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudG9uaW8uemFuZXRpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NjY3OTMyNywiZXhwIjoxNTk2Njk3MzI3fQ.lfsAoyW3WCD00-LZp6P8hSomUuoi621kD9kxoI0HRtE"

    }
})
