import http from 'http'
import app from './app.js'
import chalk from 'chalk';
function bootstrap() {
    const server = http.createServer(app)
    const port=3000
    server.listen(port, () => {
        console.log(chalk.greenBright.underline(`✔ [success] server Started listening on port : ${port} 💥`))
    });
  
}
bootstrap()

export default app;