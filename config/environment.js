import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/state-of-sequoia'
export const port = process.env.PORT || 8000
export const secret = process.env.SECRET || 'yeehaw'