import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
        
        const token = authHeader.split(' ')[1];
        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }
            
            req.user = decoded; // Attach decoded user info to request
            next();
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
