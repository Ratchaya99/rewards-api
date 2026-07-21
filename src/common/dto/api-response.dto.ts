export class ApiResponseDto<T> {
  status!: 'success' | 'error';
  code!: number;
  message!: string | null;
  data!: T | null;
}
