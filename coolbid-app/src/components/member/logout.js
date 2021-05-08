/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint curly: 2, quotes: ["error", "double"] */
/* eslint eqeqeq: "off", curly: "error" */

export default function Logout() {
  if (window.sessionStorage.getItem('userinfo')) {
    // 清sessionstorage
    window.sessionStorage.clear()
    alert('登出成功')
    window.location.href = 'http://localhost:3000/'
  }
}
