import {app, authMiddleware, logger, schemaValidationMiddleware} from "snapmeal-common"
import menuRequestSchema from "./validation/menu.schema";

app.post("/menu", schemaValidationMiddleware(menuRequestSchema), authMiddleware , (req, res)=>{
    res.send("Menu service is running");
})

app.listen(8004,()=>{
    logger.log(`Menu service is running on port 8004`);
})