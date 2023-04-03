const uuid = require("uuid");
const path = require("path");
const {BasketDevice, Basket, Brand} = require("../models/models");
const ApiError = require("../error/ApiError");

class BucketController{
    async create(req,res,next) {
        try {
            let {basketId,deviceId} = req.body
            const basket = await BasketDevice.create({basketId,deviceId});
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req,res){
        const {id} = req.params
        const basketId = id
        const basket = await Basket.findOne(
            {
                where: {id}=1,

            }


        )

        return res.json(basket)
    }
    async getAll(req,res){

        let basket = await BasketDevice.findAll()

        return res.json(basket)
    }

}
module.exports = new BucketController()