import Booking from "../modles/Booking.js";

export const bookActivity = async (req, res) => {
  const userId = req.user.userId;
  const { activityId } = req.body;

  const existing = await Booking.findOne({
    user: userId,
    activity: activityId,
  });
  if (existing) return res.status(400).json({ message: "Already booked!" });

  const booking = await Booking.create({ user: userId, activity: activityId });
  res.json({ message: "Activity booked!", booking });
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId }).populate(
    "activity"
  );
  res.json(bookings);
};
