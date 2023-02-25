import {
  create_product_service,
  delete_product_service,
  find_product_by_category_service,
  get_single_product_service,
  update_product_service,
} from "../services/product.services.js";

export const create_product = async (req, res, next) => {
  try {
    const result = await create_product_service(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const get_single_product = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await get_single_product_service(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const find_product_by_category = async (req, res, next) => {
  try {
    const { name } = req.query;
    const result = await find_product_by_category_service(name);
    res.status(200).json({
      status: "success",
      data: result,
    })
  } catch (error) {
    next(error);
  }
}

export const update_product = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await update_product_service(id, req.body);

    res.status(200).json({
      status: "success",
      data: result
    })
  } catch (error) {
    next(error);
  }
}

export const delete_product = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await delete_product_service(id);
    
    res.status(200).json({
      status: 'success',
      data: result
    })
  } catch (error) {
    next(error);
  }
}