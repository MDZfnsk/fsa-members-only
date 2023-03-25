import { db } from './db';

export const rejectRequest = async( requestId) => {
   
    await db.getConnection().collection('requests').deleteOne({ id: requestId});
}