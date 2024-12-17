const Package = require('../Models/package');

const getPackages = async(req,res) =>{
    try{
        const package = await Package.find();
        res.status(200).json(package);
    }catch(error)
    {
        res.status(500).json({message:"problem in fetching package",error:error.message})
    }
};

const getPackageById = async(req ,res) =>{
    const {id} = req.params;

    try{
        const package = await Package.findById(id)
        if(!package)
        {
            return res.status(404).json({message:"Package Not Found"})
        }
        res.status(200).json(package);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const createPackage = async(req , res) =>{
    const {title,description,price,availableDates,image} = req.body;

    const newPackage = new Package({
        title,
        description,
        price,
        availableDates,
        image,
    });

    try{
        const savedPackage = await newPackage.save();
        res.status(201).json(savedPackage);
    }catch(error){
        res.status(400).json({message:error.message})
    }

}

const updatePackage = async(req,res)=>{
    const {id} = req.params;

    try{
        const updatedPackage = await Package.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedPackage)
        {
            return res.status(404).json({message:"Package not found"});
        }
        res.status(200).json(updatedPackage);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};

const deletePackge = async(req,res) =>{
    const {id} = req.params;

    try{
        const deletePackge = await Package.findByIdAndDelete(id);
        if(!deletePackge){
            return res.status(404).json({message:"Package not found"});
        }
        res.status(200).json({message:"Package deleted successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    getPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackge
};