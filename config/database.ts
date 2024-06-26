/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | MySQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MySQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i mysql2
    |
    */
    mysql: {
      client: 'mysql2',
      connection: {
        host: 'bhfi7imcuepjaalbuy4d-mysql.services.clever-cloud.com',
        port: 3306,
        user: 'uci6r69cr504wfpp',
        password: 'DigmIlE2YrHEWNHy2aQ8',
        database: 'bhfi7imcuepjaalbuy4d',
        ssl: {
          rejectUnauthorized: false,
        }
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },

  }
}

export default databaseConfig
