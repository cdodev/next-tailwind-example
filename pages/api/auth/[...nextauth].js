import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: {
        "type": "postgres",
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA,
        ssl: {
            rejectUnauthorized: false,
        },
    },
    // database: process.env.DATABASE_URL,
    debug: true
}

export default (req, res) => NextAuth(req, res, options)
