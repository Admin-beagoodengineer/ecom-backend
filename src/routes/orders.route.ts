import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { myOrders, newOrder, allOrders, getSingleOrder, processOrder, deleteOrder } from '../controllers/order.controller.js';

const app = express.Router();

// Route: /api/v1/order/{nameOfRoute}
app.post("/new", newOrder);
app.get("/my", myOrders);
app.get("/all", adminOnly, allOrders);
app.route("/:id").get(getSingleOrder).put(adminOnly, processOrder).delete(adminOnly, deleteOrder);

// For App
app.get("/app/all", allOrders);
app.route("/app/:id").get(getSingleOrder).put(processOrder).delete(deleteOrder);


export default app;