declare module "jsonwebtoken" {
  interface keyValueT {
    [key: string]: string;
  }

  type secretOrPublicKeyT = string;

  type tokenT = {
    [key: string]: any;
  };

  type AlgorithmT =
    | "HS256"
    | "HS384"
    | "HS512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "none";

  interface optionT {
    algorithm?: AlgorithmT;
    expiresIn?: string | number;
    notBefore?: string | number;
    audience?: string;
    issuer?: string;
    jwtid?: string;
    subject?: string;
    noTimestamp?: boolean;
    header?: string;
    keyid?: string;
    mutatePayload?: boolean;
    allowInsecureKeySizes?: boolean;
    allowInvalidAsymmetricKeyTypes?: boolean;
  }

  interface cbFuncT {
    (err: Error | null, token: string): void;
  }

  export function sign(
    keyValue: keyValueT,
    secretOrPublicKey: secretOrPublicKeyT,
    option?: optionT
  ): tokenT;

  export function sign(
    keyValue: keyValueT,
    secretOrPublicKey: secretOrPublicKeyT,
    cbFunc: cbFuncT
  ): void;

  export function sign(
    keyValue: keyValueT,
    secretOrPublicKey: secretOrPublicKeyT,
    option: optionT,
    cbFunc: cbFuncT
  ): void;

  export function verify(
    token: tokenT,
    secretOrPublicKey: secretOrPublicKeyT,
    cbFunc?: cbFuncT
  ): tokenT;
}
