const incomeSchema = require('../models/incomeModel')

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const Income = incomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            res.status(400).json({message:'All Fields are required !'})
        }
        if(amount <= 0 || amount ==='number'){
            res.status(400).json({message:'Not a Valid number !'})
        }
        await Income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getIncomes = async (req,res)=>{
    try{
        const Incomes = await incomeSchema.find().sort({createdAt:-1});
        res.status(200).json(Incomes);
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req,res)=>{
    const {id} = req.params;

    incomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:'Income Deleted'});
    }).catch((err)=>{
        res.status(200).json({message:err})
    })
}