import api from "@/services/api";

export const fetchProformas = async () => {
    try {
        const response =await api.get('/proformas');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
