const expenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const Expense = expenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      res.status(400).json({ message: "All Fields are required !" });
    }
    if (amount <= 0 || amount === "number") {
      res.status(400).json({ message: "Not a Valid number !" });
    }
    await Expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const Expenses = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(Expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  expenseSchema
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: err });
    });
};
