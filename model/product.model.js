import mongoose from 'mongoose';
import moment from 'jalali-moment';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        createdAt: { type: Number, required: true, default: moment(new Date()).format('X') },
        updatedAt: Number,
        deletedAt: Number,
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        versionKey: false,
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
