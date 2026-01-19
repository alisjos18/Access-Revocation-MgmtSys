**Access Revocation Management System**

◦ **Project overview:** An _Access Revocation Management System_ that allows administrators to grant and revoke user access while ensuring revoked access cannot be self-restored, enforcing revocation rules and ensuring data persistence using a database.

◦ **Tech stack:**
Backend: Node.js, Express.js
Database: MongoDB Atlas
Deployment: Render
Frontend: HTML5

◦ **User roles and permissions:**
a. _User:_ Login, register, access (hasAccess enabled)
b. _Admin:_ Authorized to flip _User_ privileges

◦ **API endpoints:**

◦ **Database schema:**

{
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
    hasAccess: { type: Boolean, default: true }
}

◦ **Live deployment links:** https://access-revocation-mgmtsys.onrender.com/
