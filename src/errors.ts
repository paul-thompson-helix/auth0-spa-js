export class AuthenticationError extends Error {
  constructor(
    public error: string,
    public error_description: string,
    public state: string
  ) {
    super(error_description);
  }
}

export class InternalError extends Error {
  public error = 'internal_error';
  constructor(public error_description: string = 'Internal Error') {
    super(error_description);
  }
}
