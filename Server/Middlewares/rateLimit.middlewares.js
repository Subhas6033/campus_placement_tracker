import rateLimit from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import { redisClient } from "../Config/redis.config.js";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,

  standardHeaders: true,
  legacyHeaders: false,

  skipSuccessfulRequests: true,

  message: {
    success: false,
    message:
      "Too many authentication attempts. Please try again after 15 minutes.",
  },

  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
});
