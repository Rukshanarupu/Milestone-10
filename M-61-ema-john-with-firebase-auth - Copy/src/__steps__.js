/**
 * 1. create firebase project
 * 2. create web app
 * 3. npm i firebase
 * 4. save firebase config and export default app
 * 5. Build> Authentication > get started > enable sign in method
 * 6. create sign up and Login route
 * */ 

/**
 * 1. Create a context provider file
 * 2. create a context and set provider
 * 3. set the children props
 * 4. set context value
 * 5. set the provider 
*/

/**
 * HOSTING
 * --------------------
 * One time per PC
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 
 * For each project one time
 * 1. firebase init
 * 2. proceed 
 * 3. hosting: firebase (up and down arrow) use space bar to select
 * 4. existing project 
 * 5. select the project careful
 * 6. which project as public directory: dist
 * 7. single page application: yes
 * 8. continuous deployment: no
 * 
 * For every time deploy
 * 1. npm run build
 * 2. firebase deploy
*/


/**

// Firebase
1. https://console.firebase.google.com/u/0/project/name-password-authentication/authentication/providers
2. https://firebase.google.com/docs/auth/web/start

// React router
3. https://reactrouter.com/en/main/start/tutorial
4. https://react.dev/reference/react
5. https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx

// css framework
6. https://daisyui.com/docs/install/
7. https://react-bootstrap.netlify.app/docs/getting-started/introduction

**/ 



/**
* if we want , click on login that it goes to that page:

1. const navigate =useNavigate() ---->  const location = useLocation()-----> const from =location.state?.from?.pathname || '/' ----->
signInUser(email, password)  ----->
.then(result=>{
    navigate(from, {replace: true})
})
 -----> <Navigate to='/login' state={{from}} replace></Navigate> in privateRoute
2. than we have to work in authProviders: we have to setLoading(true) in createUser & signInUser
/**/ 