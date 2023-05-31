import express, { Request, Response } from 'express'


const router=express.Router()


router.post('/create-appoinmentOption', async (req:Request,res:Response)=>{
    res.send('Hello from appoinment options')

    

})

export default router


