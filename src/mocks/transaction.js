import { rest } from 'msw';




export const handlers = [
    // Handles a GET /transactions request
    rest.get('/transactions', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json({
                transactions: []
            }),
        )
    }),
]