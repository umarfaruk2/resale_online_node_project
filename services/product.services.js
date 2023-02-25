import product_model from "../models/product.schema.js"

export const create_product_service = async (data) => {
    const result = await product_model.create(data);
    return result;
}


export const get_single_product_service = async (id) => {
    const result = await product_model.findOne({_id: id});
    return result;
}

export const find_product_by_category_service = async (category) => {
    const result = await product_model.find({ category: category});
    return result;
}

export const update_product_service = async (id, data) => {
    const result = await product_model.updateOne({ _id: id}, data, {
        runValidators: true
    })
    return result;
}

export const delete_product_service = async (id) => {
    const result = await product_model.deleteOne({ _id: id });
    return result;
}