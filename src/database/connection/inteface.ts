interface ConnectionConfig {
  host?: string
  database?: string
  user?: string
  password?: string
  port?: number
  ssl?: 'require' | 'allow' | 'prefer' | 'verify-full' | boolean | object
  connection?: {
    options: string
  }
}

export interface DataBaseConfig {
  devParams: ConnectionConfig
  prodParams: ConnectionConfig
}
