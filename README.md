# Data Analytics Platform
This is a full-stack data analytics platform that provides insights into customer behavior, product lifecycle, sales performance, and forecasting using interactive dashboards. The platform is built using React for the frontend, Node.js for the backend, and MongoDB for the database.
---
### Features
1. Landing Page:

- Responsive design with animations and a contact form.
- Sections for services, company overview, and user registration/login.
2. Dashboard:

- Interactive side menu with tabs for:
  - Home: Overview of KPIs and quick business insights.
  - Customer Analytics: Customer segmentation and churn prediction.
  - Product Analytics: Product lifecycle management and profitability analysis.
  - Sales Dashboard: Revenue trends, ROI analysis, and sales forecasting.
  - Graphs, charts, and tables for visualizing data.
3. Authentication:

- Login and registration with JWT-based authentication.
- HTTP-only cookies for secure session management.
4. Email Functionality:

- Contact form integration for sending inquiries using Ethereal email service.
---
### Technologies Used
#### Frontend
- React: Dynamic UI development.
- Recharts: Interactive data visualization (e.g., Line, Bar, Pie charts).
- Bootstrap: Responsive and modern design.
- Font Awesome: Icon integration.
- AOS: Smooth animations.
#### Backend
- Node.js: Server-side runtime.
- Express.js: Web framework.
- MongoDB: Database for persistent data storage.
- Nodemailer: Email sending functionality.
#### Hosting
Local deployment instructions provided.
---
### Setup Instructions
1. Clone the Repository
```
git clone https://github.com/amrfayezz1/AI-Eagles.git
cd AI-Eagles
```

3. Setup Backend
Navigate to the /backend directory:

```cd backend```

Install Dependencies:
```npm install```

Environment Variables:
Create a .env file in the /backend folder and add the following:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-email-address>
EMAIL_PASS=<your-email-password>
```

Start the Backend:
```npm start```

The backend should now run on http://localhost:5000.

3. Setup Frontend
Navigate to the /frontend directory:

```cd ../frontend```

Install Dependencies:
```npm install```

Start the Frontend:
```npm start```

The frontend should now run on http://localhost:5173.

Running the Project
1. Start the Backend: Run npm start in the /backend directory.
2. Start the Frontend: Run npm start in the /frontend directory.
3. Open your browser and navigate to http://localhost:5173.
---
### How to Use
1. Landing Page:

- View the services offered and explore the contact form.
- Register or log in to access the dashboard.
2. Dashboard:

- Use the sidebar to navigate between tabs (Home, Customer, Product, Sales).
- Interact with the graphs and tables for data insights.
3. Contact Form:

- Fill in the form to send inquiries. A success message will appear upon submission.
---
## Contact
For questions or support, feel free to email at [amrfayez.247@gmail.com](mailto:amrfayez.247@gmail.com).
