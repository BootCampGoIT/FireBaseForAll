
export const authForm = (props) => {
  return `
  <form name="authForm">
    <input type="email" name="email">
    <input type="password" name="password">
    <button type="submit" data-loginButton=${props}>${(props === "signup") ? "SIGNUP" : "SIGNIN"}</button>
  </form>
  `
}
