const auth = firebase.auth();

// DOM
const whenSignedOut = document.querySelector('#whenSignedOut');
const whenSignedIn = document.querySelector('#whenSignedIn');

const SignOutBtn = document.querySelector('#SignOutBtn');
const SignInBtn = document.querySelector('#SignInBtn ');

const userDetails = document.querySelector('#userDetails');

// auth
const provider = new firebase.auth.GoogleAuthProvider();

SignInBtn.onclick = () => auth.signInWithPopup(provider);

SignOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
   if (user) {
      console.log(user);
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `
       <h3>
      Hello ${user.displayName} 
      with id ${user.uid} 
       </h3> 
        `;
   } else {
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = ``;
   }
});
