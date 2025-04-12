### 📄 **NOTE.md (migration progress)**
This file keeps track of **the migration process and key considerations**.

#Frontend process - HTML CSS Figma css->React, 3-4 weeks
**Finish the UI and its components
**Copy CSS properties directly from Figma or UI libraries by matching figma
**npm install bootstrap or tailwind
**


# AMSA Frontend Migration Notes

## 📌 Migration Plan (Angular → React)
** Old frontend repo (private)!: https://gitlab.com/tsenguun/amsa-frontend.git
** New frontend repo (this one): git clone https://github.com/nandinnnnnnnnnnnn/amsa-frontend-react.git

1️⃣ **Create a new GitHub repository** ✅  
2️⃣ **Set up a React project** using Vite ✅  
3️⃣ **Connect React frontend to existing Node.js backend** (not yet)  
4️⃣ **Rewrite key Angular components in React** (not yet)  
5️⃣ **Test API calls and CORS handling** (not yet had to looke into CORS handling)  
6️⃣ **Deploy React frontend on Vercel** (last step)  

---

## 🔄 API Connection with the Existing Backend
- ** Backend repo (gitlab and private)** https://gitlab.com/tsenguun/amsa-backend.git
- **Backend repo remains on GitLab** (owned by tsenguun).
- **Frontend will interact with the same API endpoints** (`/login`, `/signup`).
- **CORS must be enabled** (Should talk with Tsenguun)

---

## Next Challenges & Solutions
**Backend Access:** Already have access to GitLab backend repo.  
**CORS Issues:** Need to allow `https://amsa-frontend.vercel.app` in backend CORS settings.  
**Auth Handling:** React app should handle JWT tokens correctly.  
**Deployment Strategy:** Using **Vercel for frontend** and **Digital Ocean for backend**.  

---

## 📌 Things to Watch Out For
- **Ensure React components match the old Angular UI.**
- **Test API connections thoroughly before switching the live frontend.**
- **Document all API endpoints in `src/api/`.**
- **Ensure smooth login/logout functionality before launch.**

---

### Final Goal:
- **React frontend fully replaces Angular.**  
- **Connected to existing backend with no disruptions.**  
- **Deployed, tested, and fully functional.**  
