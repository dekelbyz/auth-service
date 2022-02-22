import * as mongoose from 'mongoose';

/** Represents our User Schema for mongoose */
export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

/** Represents our User stracture as it appears
 * in our database.
 */
export interface User {
  id: string;
  username: string;
  password: string;
}
