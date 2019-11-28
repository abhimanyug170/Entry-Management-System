Innovaccer SummerGeeks SDE Assignment
=====================================

Innovaccer SummerGeeks submission by Abhimanyu Gupta

### Problem Statement
Create an entry management software for visitors coming in office with context of a host inside the workplace
### Technology Stack

-   NodeJS

-   MongoDB

-   ExpressJS

-   NEXMO messaging API

-   NodeMailer email API

### Instructions to install

1, Clone this repository:

```git clone https://github.com/abhimanyug170/Entry-Management-System```

2, Change directory

```cd Entry-Management-System```

3, Install dependencies

```npm install```

4, Generate Authentication Key for messaging api.

Refer to this link - <https://www.nexmo.com/>

5, Create a .env file and add the mentioned details in it.
```
# specify your port number
PORT= PORT  NUMBER HERE

# specify credentials for NEXMO(sms api).
NEXMO_API_KEY = KEY OF THE SMS API
NEXMO_API_SECRET = PASSWORD OF THE SMS API

# specify credentials for nodemailer(email api), please enable less secure apps on gmail.

EMAIL = EMAIL ADDRRESS (STRING)
PASSWORD = PASSWORD OF THE EMAIL SPECIFIED ABOVE (STRING)
EMAIL_FROM = ID BY WHICH EMAILS WILL BE SENT (STRING)

# specify office address. This address will go to the visitor in the mail.
ADDRESS= SPECIFY YOUR OFFICE ADDRESS.

```

6, Start the server

```npm start```

Routes
---------------
### 1\. "http://localhost:4000" Used to display home page of the application.
This page gives the user option to either register as a host or for a visitor to check in and out.


### 2\. "http://localhost:4000/register" Host can register himself here.
This page is used for the host to register. After registering the host will be visible to the visitor.


If the host is able to register successfully. He is shown the success message:


If the host has already registered, then he is shown error message:


#### Approach used for registration of host: 
a. Fetch details as entered by host. <br>
b. Find if a Host with that email already exists in db. If so, flash an error message. <br>
c. Else add host to db, flash a success message. <br>

### 3\. "http://localhost:4000/checkin" Visitor can check-in here.
This page is used for the visitor to check-in. He will have to choose from one of the existing hosts and enter his own details.
This will trigger an sms and email to host using API, details of which have been provided in .env file.


If user is able to check in successfully, then he gets a success message:


If the user tries to checkin, even though he has already checked in. Then he is informed about the same though an error msg:


#### Approach used for check-in: 
a. Fetch information as filled in by visitor. <br>
b. Get current date and time as well as timestamp of the entry. <br>
c. Find a visitor with that email and status as 'pending'. This means that he has already checked in beacuse he is already there in db with status pending. So flash an error. <br>
d. Else add the visitor in db, find host as entered by visitor and push visitor into visitors array for that host. This will help in host to see all the visitors he had. <br>
e. Send sms and email to host. <br>

### 4\. "http://localhost:4000/checkout" Visitor can check-out here
This page is used for the visitor to check-out. He will have to provide his email id to checkout from the application. After checking-out he will recieve an email, giving the details of his visit with the office address as provided in the .env file.

If user is able to check out successfully, then he gets a success message:

If user has already checked out, or forgot to checkin , he gets an error message:

#### Approach used for check-out: 
a. Fetch visitor email from post request. <br>
b. Find visitor with email same as entered in form and status as pending. If we are able to find such visitor then mark his status as departed and send him the mail of details. <br>
c. Else the visitor forgot to check in or has already checked out. So flash an error msg. <br>

Thanks