import prisma from "../db/db.config.js";

export const createDashboard = async(req, res) =>{
    const {agreeableness, drive, luck, openess,user_id} = req.body;

    const newDashboard = await prisma.dashboard.create({
        data:{
            agreeableness: agreeableness,
            drive: drive,
            luck: luck,
            openess: openess,
            user_id: user_id
        }
    })
    return res.json({status:200, data: newDashboard})
}

export const findDashboard = async (req, res) =>{
    const dashboards = await prisma.dashboard.findMany({})
    return res.json({status:200, data: dashboards})
}