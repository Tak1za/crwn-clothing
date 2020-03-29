import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCjsq7AajqKJhT2plUkE5DJeXoUf-ca_6E',
	authDomain: 'crwn-db-47e15.firebaseapp.com',
	databaseURL: 'https://crwn-db-47e15.firebaseio.com',
	projectId: 'crwn-db-47e15',
	storageBucket: 'crwn-db-47e15.appspot.com',
	messagingSenderId: '980207729088',
	appId: '1:980207729088:web:0553377952434b8143f025',
	measurementId: 'G-NW3PJL3PF1'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		//if user data does not exist in database
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		//add user data to database
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
