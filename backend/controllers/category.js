import Category from "../db/categoryModel.js";

const getCategories = async (req, res) => {
  try {
    const category = await Category.find();

    if (category.length > 0) {
      return res.status(200).send(category);
    }
    res.status(404).send({ message: "No existe ninguna categoria" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Error al buscar las categorias" });
  }
};

const getCategorie = async (req, res) => {
  const categoryId = req.params;
  try {
    const category = await Category.findOne({ _id: categoryId });

    if (category.length > 0) {
      return res.status(200).send(category);
    }
    res.status(404).send({ message: "No existe ninguna categoria" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Error al buscar las categorias" });
  }
};

export { getCategorie, getCategories };
