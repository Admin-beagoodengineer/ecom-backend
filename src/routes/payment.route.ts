import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from '../controllers/payment.controller.js';

const app = express.Router();

// Route: /api/v1/payment/{nameOfRoute}
app.get("/discount", applyDiscount);
app.post("/coupon/new", adminOnly, newCoupon);
app.post("/create", createPaymentIntent);
app.get("/coupon/all", adminOnly, allCoupons);
app.delete("/coupon/:id", adminOnly, deleteCoupon);

export default app;