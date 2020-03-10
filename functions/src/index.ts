import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as moment from 'moment';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp();
exports.triggerUser = functions.auth.user().onCreate((user) => {
    console.log("user created");
    return admin
        .firestore()
        .collection('/users/').doc(user.uid).set({
            email: user.email,
            name: 'non défini',
            phone:'non renseigné',
            image:'',
            role:'utilisateur',
            team:'non renseigné',
            job:'non renseigné',
            register: moment().format('YYYY-MM-DD')
        });
});
