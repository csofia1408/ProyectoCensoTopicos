import axios from 'axios'

    const Respondentapi = axios.create({
    baseURL: "http://localhost:8000/respondent/api/v1/respondent/"
    });

    export const getAllRespondent = () => Respondentapi.get("/");

    export const getRespondent= (id) => Respondentapi.get(`/${id}`);

    export const createRespondent = (respondent) => Respondentapi.post("/", respondent);

    export const updateRespondent = (id, respondent) => Respondentapi.put(`/${id}/`, respondent);

    export const deleteRespondent = (id) => Respondentapi.delete(`/${id}`);

    