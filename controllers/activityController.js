import Activity from "../modles/Activity.js";

export const getActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};

export const createActivity = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;

    const activity = new Activity({ title, description, location, date });
    await activity.save();

    res
      .status(201)
      .json({ message: "Activity created successfully", activity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
