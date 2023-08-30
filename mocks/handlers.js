import { rest } from "msw";

export const handlers = [
    rest.get("/api/userGoogle", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ name: "Teste Google" }));
    }),
    rest.get("/api/userGithub", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ name: "Teste Github" }));
    }),
    rest.get("/api/userFacebook", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ name: "Teste Facebook" }));
    }),
    rest.get("/api/register", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ name: "Teste Register" }));
    }),
    rest.get("/api/userExist", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ name: "Teste Exist" }));
    })
]