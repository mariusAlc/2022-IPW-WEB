import basicRoutes from "./basicRoutes";
import middlewares from "./middlewares";
import privateRoutes from "./privateRoutes";
import errorHandling from "./errorHandling";
import { Router } from "express";
const router = Router();
router.use("/basic", basicRoutes);
router.use("/middleware", middlewares);
router.use("/private", privateRoutes);
router.use("/error", errorHandling);

export default router;