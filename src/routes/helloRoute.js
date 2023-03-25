import { v4 as uuid } from "uuid";

export const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: (req,res) => {
        
        res.status(200).json({message:'Hello from the other side!'});

        // res.status(200).json({message:'Hello from the other side!', body: uuid()});
        
    }
}