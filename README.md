# ABC Tutoring Prototype

A static, responsive prototype for ABC Tutoring.

Parents can browse sample tutors, request an online or in-person tutoring session, and receive a 24-hour hold while Dana reviews the request through the owner view.

## 🚀 Live Demo

Visit the live prototype:

https://upskillingtogether.github.io/

## 💻 Run Locally

Open `index.html` directly in your browser, or run a local server:

```bash
python3 -m http.server 8000
```
Then open:

```bash
http://localhost:8000
```

## ✨ Features

- Browse sample tutor profiles
- View tutor details and availability
- Request online or in-person tutoring sessions
- Receive a 24-hour booking hold while the request is reviewed
- Owner view for reviewing booking requests
- Approve or decline booking requests
- Responsive design for desktop and mobile
- Local browser storage for prototype booking data
  
## 📊 Analytics

The prototype uses PostHog to track anonymous user activity and booking-funnel events.

Tracked events include:

- `tutor_profile_viewed`
- `booking_started`
- `booking_submitted`
- `booking_request_approved`
- `booking_request_declined`

No parent name, email address, or student name is sent to PostHog.

## ⚠️ Prototype Limitations

This project is a prototype and is not intended to be a production booking or administration system.

- Booking data is stored in the browser's `localStorage`.
- Parent and owner views share data only when used in the same browser.
- The owner view does not include production-level authentication or authorization.
- There is no production database or backend.
- Booking requests are simulated for demonstration purposes.

## 🛠️ Technologies

- HTML
- CSS
- JavaScript
- PostHog
- GitHub Pages
- Browser `localStorage`

## 🌐 Deployment

The prototype is deployed as a static website using GitHub Pages.

Live site:
https://upskillingtogether.github.io/

## 📄 Project Status

This project is currently a prototype demonstrating the core tutoring discovery and booking experience.

## 📄 License
This project is a prototype for ABC Tutoring.
