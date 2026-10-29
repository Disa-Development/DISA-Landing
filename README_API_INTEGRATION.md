# DISA Frontend ↔ Backend

1. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to the actual IAMService HTTP(S) origin (no trailing slash).
2. In IAMService configure CORS to allow `http://localhost:5173` and deployed frontend domain.
3. Run backend, apply EF Core migrations and ensure Partner role is seeded.
4. Run `npm install`, `npm run dev`.
5. Visit `/partner/register`, `/login`, `/partner/dashboard`, `/admin/dashboard`.

Admin login uses `/api/auth/login` and assumes JSON `{email,password}` and an accessToken response. Verify against your existing AuthController. Partner accounts must be approved by Admin before login succeeds.

**Important:** The original public Partner contact/policy/QR flow remains informational. It is NOT a payment confirmation. The new Partner dashboard is the authenticated API workflow.

Known backend constraints: admin invoice creation UI not yet implemented; request image upload may partially succeed before submission; backend CORS and database must be configured. Tokens stored in sessionStorage for this integration (production should assess httpOnly cookie authentication).
