# Express Middleware Project

This repository contains a solution to an Express.js middleware exercise using Node.js.

## Exercise: Implement Middleware in an Express Application

### Requirements:
1. **Create a new project.**
2. **Modify `app.js` to:**
   - Display an HTML response for requests to the `/users` route.
   - Display a different HTML response for all other routes (content is your choice).
3. **Add two additional middleware functions** that log `Hello1` and `Hello2` for every request.

### Project Structure:
```plaintext
Express-Middleware-Project-1/
├── app.js
├── package.json
```
- **Middleware logic**: Implemented in `app.js` to handle request logging.
- **Server execution**: Managed using Express and Nodemon.

### Solution Overview:

1. **Middleware with Express.js**:
   - Logs "Hello1" and "Hello2" for every request.
   - Handles routing for `/users` and `/` endpoints.

2. **Response Handling**:
   - `/users`: Serves an HTML response with user details.
   - `/`: Serves an HTML response with a random story.

### Example Routes:
- `/users`: Displays user information.
- `/`: Displays a random story.

### How to Run:
1. Clone the repository.
2. Install Node.js if not already installed.
(using `npm install`)
3. Run the following command to start the server:
   ```bash
   node app.js
   ```
   The application will be accessible at `http://localhost:3000`.

### Dependencies:
- **express** (`^4.21.2`): A fast, minimalist web framework for Node.js.
- **nodemon**: Automatically restarts the server when file changes are detected.

Have a great day ♡


![CuteCat](https://github.com/user-attachments/assets/382c2b8c-75c4-415a-9202-552c31cae582)
