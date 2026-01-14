
export default function authMiddleware(req, res, next) {
    // check for valid user id
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ error: 'Not authenticated' });
    }
    
    // call next middleware
    next();
}
