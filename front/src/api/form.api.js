import axios from 'axios'

    const Respondentform = axios.create({
    baseURL: "http://localhost:8000/respondent/prueba/census-forms/"
    });

    export const getAllRespondent = () => Respondentform.get("/");

    export const getRespondent= (id) => Respondentform.get(`/${id}`);

    export const createRespondent = (respondent) => Respondentform.post("/", respondent);

    export const updateRespondent = (id, respondent) => Respondentform.put(`/${id}/`, respondent);

    export const deleteRespondent = (id) => Respondentform.delete(`/${id}`);

    