import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const TransformMessagePayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const rawMessage = ctx.switchToRpc().getData();

    if (typeof rawMessage === 'object') {
      return rawMessage;
    }

    try {
      return JSON.parse(rawMessage);
    } catch {
      throw new Error('Invalid JSON payload');
    }
  },
);