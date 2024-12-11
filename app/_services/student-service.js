import { axios } from "@/app/_services/axios";

export const getStudents = (page) => {
    return axios.get('/api/students?page=' + page)
        .then(response => {
            return response.data
        })
        .catch(err => {
            const msg = "ERROR: getStudents: " + err
            console.error(msg)
            throw new Error(msg)
        })
}

export const createStudent = (student) => {
    console.log(student)

    return axios.post('/api/students', student)
        .then(response => {
            return response
        })
        .catch(err => {
            const msg = "ERROR: createStudent: " + err
            console.error(msg)
            throw new Error(msg)
        })
}
