import Animal from "../models/Animal";

export const getAllAnimals = async(req, res, next) => {
    let animals;
    try {
        animals = await Animal.find();
    } catch (err) {
        console.log(err);
    }
    if (!animals) {
        return res.status(404).json({ message : "No animals found."});
    }
    return res.status(200).json({animals});
};

export const addAnimal = async(req, res, next) => {
    const{name,type,age,chip,note} = req.body;
    const animal = new Animal({
        name, 
        type,
        age,
        chip,
        note
    })
    try {
        await animal.save()
    } catch (err) {
        console.log(err);
    }
    return res.status(200).json({animal});
};
