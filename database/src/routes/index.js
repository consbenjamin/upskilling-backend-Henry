const { Router } = require("express");
const store = require("../database")
const  { ValidateModel } = require("../middlewares")

const router = Router();

router.get("/:model", ValidateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});

router.get("/:model/:id", ValidateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model", ValidateModel, async (req, res) => {
    const { character, _id} = req.body;
    const { model } = req.params;
    const response = await store[model].insert(character);
    res.status(200).json(response);
});



module.exports = router;