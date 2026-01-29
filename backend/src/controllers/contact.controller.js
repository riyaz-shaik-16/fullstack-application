import Contact from "../models/contact.model.js";

export const createContact = async (req, res, next) => {
  try {
    const { name, email, mobile, city } = req.body;

    if (!name || !email || !mobile || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({
      name,
      email,
      mobile,
      city,
    });

    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (_req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
