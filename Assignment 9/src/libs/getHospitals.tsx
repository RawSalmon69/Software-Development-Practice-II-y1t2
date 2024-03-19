export default async function getHospitals() {
    try {
        const response = await fetch('https://vaccine-app-backend.vercel.app/api/v1/hospitals');
        if (!response.ok) {
            throw new Error('Failed to fetch hospitals');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        throw error;
    }
}