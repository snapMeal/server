import { z } from "zod";
const menuRequestSchema = z.object({
  title: z.string().min(1).max(20),
  description: z.string().min(1).max(20),
  image: z.string(),
  price: z.number(),
});
export default menuRequestSchema;