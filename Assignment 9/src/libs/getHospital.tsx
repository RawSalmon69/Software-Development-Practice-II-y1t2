export default async function getHospital(id: string) {
    try {
        const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch hospital');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching hospital:', error);
        throw error;
    }
}