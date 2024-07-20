export default function useTestApi() {
    return async function handler() {
        try {
            const response = fetch(`http://localhost:8080/write-with-us`, 
                {
                    method: 'POST', 
                    body: JSON.stringify({ title: 'This is dummy title' })
                })
            return response;
        } catch (error: any) {
            console.log(error)
        }
    }
}