import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import type { Response } from 'express';

interface ExceptionResponse {
  message: string | string[];
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();

    const response = context.getResponse<Response>();

    const status = exception.getStatus();

    const message = this.getMessage(exception);

    response.status(status).json({
      status: 'error',
      code: status,
      message,
      data: null,
    });
  }

  private getMessage(exception: HttpException): string | string[] {
    const response = exception.getResponse();

    if (typeof response === 'string') {
      return response;
    }

    if (this.isExceptionResponse(response)) {
      return response.message;
    }

    return 'Unknown error';
  }

  private isExceptionResponse(value: unknown): value is ExceptionResponse {
    return typeof value === 'object' && value !== null && 'message' in value;
  }
}
