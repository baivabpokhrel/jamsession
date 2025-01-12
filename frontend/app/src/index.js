import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './config';
import * as monaco from 'monaco-editor'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
   
  }
});

let myAppConfig = {
  aws_appsync_graphqlEndpoint: config.graphql.URL,
  aws_appsync_region: config.graphql.REGION,
  aws_appsync_authenticationType: config.graphql.AUTHENTICATION_TYPE,
  //aws_appsync_apiKey: "da2-of6krb3derdeze4t6lqjs44sii"
};
Amplify.configure(myAppConfig);
  /*,
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.graphql.URL,
        region: config.graphql.REGION
      }
    ]
  }*/


monaco.editor.create(document.getElementById('root'), {
  value: 'console.log("Hello, world")',
  language: 'python'

});

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
