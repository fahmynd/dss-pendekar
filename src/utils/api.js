export const KODE_SLUG = window.location.hostname.split('.')[0]
// export const KODE_SLUG = 'enrekangkab'

export const BASE_API_URL = `https://${KODE_SLUG}.pendekar.digital/api/`

const TOKEN_KEY = "api_token"

export function setApiToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

export function getApiToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function clearApiToken() {
    localStorage.removeItem(TOKEN_KEY)
}
