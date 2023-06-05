---
sidebar_position: 2
---

# ✅ OAuth and OpenID Connect


Sources:
 - Oauth 2.0 and OpenID Connect (in plain English)

### History
---
Simple login or forms authentication is the simple type of authentication.
* Username and password form 
* Backend website code looks up if this combination of username and password exists
	* Hash password
	* Verify Hash
	* Look up user info
	* Look up authorization info
	* Application would drop a cookie into the web browser to keep track of the user

The above is how authentication started on the web.  But the industry has moved away from this because of the following downsides:
1. Security - keeping up to date with the latest cryptography standards
2. Maintenance - maintaining your own code and server

OAuth 2.0 and OpenID connect are becoming the industry best practice for solving these problems.

:::info
There is a lot of confusion around OAuth around the web.  Why?
*  A lot of jargon and terminology around these technologies. The online resources talk to you as if you are already familiar with the terms, and if you aren't, you won't understand what they are saying.
* A lot of incorrect and conflicting information. 
:::

Identity Use Cases (pre-2010)
* Simple login (forms and cookies)
* Single sign-on (SSO) across sites, was done with a protocol called SAML. It is still used today sometimes. SAML works, but has a reputation for being difficult to work with as a developer. 
* Mobile app login (???) - If we wanted someone to log into an app and stay logged in - this was a new challenge and there wasn't a universal way to do it.
* Delegated authorization (???) - This is where the OAuth protocol started. There was no good way to do it back then. There is an infamous example on yelp where they asked for your actual Gmail password in order to get access to your friends' email addresses to email them (and they promised to throw away your password after...).

:::info

### Delegated Authorization Problem

This is the pattern where you let another site have access to *some* of your information from another site. E.g. Do you want to let site x, have access to your Facebook profile? You click "yes" and now you have another account have access to your Facebook information
:::

### Delegated Authorization Flow Basic

1.  You arrive at a website, and it says "Connect with Google". You click on it and get redirected to a Google domain and be prompted to log in. 
2. Assuming you're logged in successfully, you will see something like "Allow Site X to have access to access your public profile and contacts. Do you want to allow this" The user has to consent.
3. Assuming the user clicks Yes, we are redirected back to the application to a special page called the callback/redirect URI. Now there is a permission for Site X to talk to some API (e.g. the Google contacts API) and be able to retrieve your contacts

### OAuth Terminology

* Resource owner - the user who can click yes, who owns the data that the application wants access to.
* Client - the application that wants access to the resource owner's data.
* Authorization server - the system that you can use to say "yes" - you consent to the application having access to your data. (in the example, it is part of accounts.google.com)
* Resource server - the API that holds the data that the application wants access to (in the example, the Google contacts API)
* Authorization grant - The thing that proves that the user has clicked yes and allows the application the authorization to read the user's data.
* Redirect URI - The authorization server needs to know where to redirect once the user gives consent.
* Access token - The "key" that the client needs to get the needed data.
* Scope - the *level* of permissions requested. For example, you can grant the client the ability to read the contacts, but not the ability to delete the contacts.
	* The authorization server has a list of scopes that it understands. e.g. `contacts.read`, `email.read`, `contacts.write`.
* Consent - The screen given to the resource owner that lets you know which scopes are being requested by the client.




### Why do we need a code and not just get the access token right away?
___
* Back channel (highly secure channel)
	* The request is going from a backend server to an API
* Front channel (less secure channel)
	* The browser is sending a request to an API.
		* Less secure because some information can leak from the browser (e.g. inspect/html code/network console)
The `Authorization code flow` is a front channel flow, designed to take advantage of the front channel in the most secure way.


### Delegated Authorization Flow Detailed

(Authorization Code Flow)

1. (front channel) You arrive at a website, and it says "Connect with Google". You click on it and get redirected to a Google domain and be prompted to log in. 
	* Here you are going from the client to the authorization server, and also passing along some information: 
		* Redirect URI: `clientdomain(dot)com/callback` send me back to this URI when finished
		* Response Type: `Code` (the authorization grant requested - there are different kinds of authorization grants)
		* Scopes: `contacts.read`
1. (front channel) Assuming you're logged in successfully, you will see something like "Allow Site X to have access to access your public profile and contacts. Do you want to allow this" The user has to consent.
2. (front channel) Assuming the user clicks Yes, we are redirected back to the application to a special page called the callback/redirect URI. Now there is a permission for Site X to talk to some API (e.g. the Google contacts API) and be able to retrieve your contacts
	* Redirected back with the authorization grant of type code

3. At this point, the client can't do much with this authorization code. 
	* (back channel) What it can do is to go back to the authorization server and say - "Can I exchange this code for an Access Token?". The authorization server ensures that the code is valid, and provides the access token.
		* The reason the back channel is used, is so that when the access token is being requested, the backend server also sends along some kind of secret key that only the backend server knows. This prevents anyone else who has the authorization code to request an access token. This secret key should never be in the browser.

4. Finally, the client can use the access token to get access to the Google contacts, and the Google contacts API will allow this because the access token proves that the client is authorized to get this information. The access token is *scoped* to limit the client to the requested scopes in step 1.
	* (back channel) This is also done on the back channel since, theoretically, anyone with the access token can call the API, and this access token can be intercepted if it is done through the front channel.

