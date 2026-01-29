import Subscriber from "../models/subscriber.model.js";

export const createSubscriber = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    const subscriber = await Subscriber.create({ email });

    res.status(201).json(subscriber);
  } catch (error) {
    next(error);
  }
};

export const getSubscribers = async (_req, res, next) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (error) {
    next(error);
  }
};
