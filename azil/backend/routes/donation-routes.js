import express from 'express';
import { getAllDonations } from '../controllers/donation-controller';
import { addDonation } from '../controllers/donation-controller';

const donationRouter = express.Router();

donationRouter.get("/", getAllDonations);
donationRouter.post("/addDonation", addDonation)
export default donationRouter;