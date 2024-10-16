import { app, logger } from "snapmeal-common";

const port = process.env.PORT || 8006;

app.listen(port, ()=>{
    logger.log(`Order service is running on port ${port}`);
})