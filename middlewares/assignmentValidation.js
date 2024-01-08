export const assignmentValidation = (req, res, next) => {
  console.log("assignmentValidation is Working 💪🏼");
  const { title, description, categories } = req.body;
  if (title.length > 35 || title.length === 0) {
    return res.status(401).json({
      message:
        "Invalid request, Missing title or title must not be over 35 characters 😉",
    });
  }
  if (description.length > 150 || description.length === 0) {
    return res.status(401).json({
      message:
        "Invalid request, Missing description or description  must not exceed 150 characters 😉",
    });
  }
  if (categories.length < 1 || !Array.isArray(categories)) {
    return res.status(401).json({
      message:
        "Invalid request, Categories must be an array with at least 1 value 😉",
    });
  }
  next();
};
