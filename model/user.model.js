import mongoose from 'mongoose';
import moment from 'jalali-moment';

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        mobile: { type: Number /*required: true, unique: true**/ },
        password: { type: String, required: true },
        gender: { type: String, enum: ['male', 'female', 'other'] },
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

const User = mongoose.model('User', userSchema);
export default User;
