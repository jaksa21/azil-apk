import Donation from "../models/Donation";

export const getAllDonations = async(req, res, next) => {
    let donations;
    try {
        donations = await Donation.find();
    } catch (err) {
        console.log(err);
    }
    if (!donations) {
        return res.status(404).json({ message : "No donations found."});
    }
    return res.status(200).json({donations});
};

export const addDonation = async(req, res, next) => {
    const{ type, amount, description} = req.body;
    const donation = new Donation({ 
        type,
        amount,
        description
    })
    try {
        await donation.save()
    } catch (err) {
        console.log(err);
    }
    return res.status(200).json({donation});
};
