import api from '@/services/api';


export const fetchCategorias = async () => {
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categorias:', error);
        throw error; // Puedes manejar el error aquí o lanzarlo para que lo manejen los componentes.
    }
};