import axios from 'axios';

const replicateApi = axios.create({
  baseURL: 'https://api.replicate.com/v1/predictions',
  headers: {
    Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const createPrediction = async (input: Record<string, unknown>) => {
  try {
    const response = await replicateApi.post('', {
      version: 'YOUR_MODEL_VERSION_ID_HERE', // Remplacez par l'ID de version de votre modèle
      input,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating prediction:', error);
    throw error;
  }
};

export const getPrediction = async (predictionId: string) => {
  try {
    const response = await replicateApi.get(`/${predictionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw error;
  }
};
