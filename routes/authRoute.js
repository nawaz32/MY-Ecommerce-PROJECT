import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordContoller,
  updateProfileController,
  getOrdersController,
  getALLOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

//routing
//register|| method post
router.post("/register", registerController);

//login|| posting method
router.post("/login", loginController);

//forgot passwordn    || post
router.post("/forgot-password", forgotPasswordContoller);

//test route
router.get("/test", requireSignin, isAdmin, testController);

//protecting the auth user route

router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

// protecting admin route protecting
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignin, updateProfileController);

// order routes

router.get("/orders", requireSignin, getOrdersController);

//all orders

router.get("/all-orders", requireSignin, isAdmin, getALLOrdersController);

// order status updating
router.put(
  "/order-status/:orderId",
  requireSignin,
  isAdmin,
  orderStatusController
);

export default router;
