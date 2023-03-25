import { db } from './db';

export const getUser = async (id) => {
    const connection = db.getConnection();
    const user = await connection.collection('users').findOne({ id });
    return user;
    // const user = db.getConnection().collection('users').findOne({ id });

    // return user;
}