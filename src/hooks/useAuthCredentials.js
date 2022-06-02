export function useAuthCredentials() {
    return localStorage.getItem('token')
}