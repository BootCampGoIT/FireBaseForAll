export const authForm = (props) => {
  return `
  <form name="authForm">
    <input type="email" name="email">
    <p data-autherror="email"></p>
    <input type="password" name="password">
    <p data-autherror="password"></p>
    <button type="submit" name="submitButton" data-loginbutton=${props}>${(props === "signup") ? "SIGNUP" : "SIGNIN"}</button>
  </form>
  `

}
