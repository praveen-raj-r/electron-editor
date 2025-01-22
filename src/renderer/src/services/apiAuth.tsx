// Base API URL for fleet service
const API_URL = 'https://test.microbin.io/v1/fleet'

/**
 * Utility function to handle API calls
 * @param {string} endpoint - The endpoint to send the request to.
 * @param {object} options - The options for the fetch request.
 * @returns {Promise<any>} - The parsed JSON data if successful.
 */
async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options)

    // Check if response is not OK (non-2xx status code)
    if (!response.ok) throw new Error(`Error: ${response.statusText}`)

    // Parse the response as JSON
    const data = await response.json()

    // Check if the operation was successful based on the 'status' field
    if (data.status !== 'Success') {
      throw new Error(`API error: ${data.message || 'Something went wrong'}`)
    }

    return data
  } catch (error) {
    console.error('API Call Error:', error)
    throw new Error('Network or API error. Please try again later.')
  }
}

/**
 * Function to check if a domain exists in the system
 * @param {string} domain - The domain to validate.
 * @returns {Promise<any>} - The response data.
 */
export async function checkDomain(domain) {
  return await apiCall(`${API_URL}/domainValidation/${domain}`)
}

/**
 * Function to send a verification code to the provided email for account creation
 * @param {string} email - The email to send the verification code to.
 * @returns {Promise<any>} - The response data.
 */
export async function checkCreateAccount(email) {
  const options = { method: 'POST' }
  return await apiCall(`${API_URL}/verificationCode/send/${email}`, options)
}

/**
 * Function to validate the OTP (One Time Password) for the provided email and pin
 * @param {string} email - The email for OTP validation.
 * @param {string} pin - The OTP pin to validate.
 * @returns {Promise<any>} - The response data.
 */
export async function verifyOTP(email, pin) {
  return await apiCall(`${API_URL}/verificationCode/validate/${email}/${pin}`)
}

/**
 * Function to check login credentials for a user
 * @param {string} userName - The username to validate.
 * @param {string} password - The password to validate.
 * @returns {Promise<any>} - The response data.
 */
export async function checkLogin(userName, password) {
  return await apiCall(`${API_URL}/loginValidation/Microbin/${userName}/${password}`)
}

/**
 * Function to send a verification email for a password recovery request
 * @param {string} email - The email for password recovery.
 * @returns {Promise<any>} - The response data.
 */
export async function checkForgotPasswordMail(email) {
  const options = { method: 'POST' }
  return await apiCall(`${API_URL}/mailVerification/send/${email}`, options)
}

/**
 * Function to check the validity of a domain and email combination
 * @param {string} domain - The domain to validate.
 * @param {string} email - The email to validate.
 * @returns {Promise<any>} - The response data.
 */
export async function checkDomainAndEmail(domain, email) {
  return await apiCall(`${API_URL}/domainVerification/${domain}/${email}`)
}

/**
 * Function to reset the password using the provided data
 * @param {object} dataToUpdate - The data for resetting the password (e.g., email, oldPassword, newPassword).
 * @returns {Promise<any>} - The response data.
 */
export async function resetPassword(dataToUpdate) {
  const queryParams = new URLSearchParams(dataToUpdate).toString()
  return await apiCall(`${API_URL}/resetPassword?${queryParams}`, { method: 'PUT' })
}
