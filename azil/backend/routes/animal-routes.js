import express from 'express';
import { getAllAnimals } from '../controllers/animal-controller';
import { addAnimal } from '../controllers/animal-controller';

const animalRouter = express.Router();

animalRouter.get("/", getAllAnimals);
animalRouter.post("/addAnimal", addAnimal)
export default animalRouter;