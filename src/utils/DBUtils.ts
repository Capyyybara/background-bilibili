import * as mysql from 'mysql2/promise';

class DBUtils {
    /**
     * @description 获取数据库连接池
     * @returns {mysql.Pool}
     */
    getPool(): mysql.Pool {
        const pool = mysql.createPool({
            // 服务器地址
            host: "127.0.0.1",
            // 端口
            port: 3308,
            // 用户名
            user: "root",
            // 密码
            password: "root",
            // 数据库
            database: "bilibilimusic",
        });

        return pool;
    }

    /**
     *
     * @param {string} strSql   sql语句
     * @param {Array} params    sql参数
     * @returns {Promise<mysql2.QueryError | [any[], mysql2.FieldPacket[]]>}
     */
    async executeSql(strSql: string, params: Array<any>): Promise<any> {
        const pool = this.getPool();

        try {
            const connection = await pool.getConnection();
            const [results, fields] = await connection.query(strSql, params);
            return results;
        } catch (error) {
            return Promise.reject(error);
        } finally {
            pool.end();
        }
    }
}

export default DBUtils;
