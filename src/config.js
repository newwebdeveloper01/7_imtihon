import fs from 'fs'
import { join } from 'path'

const accessLogStream = fs.createWriteStream(join(process.cwd(), 'access.log'), { flags: 'a' })

export {accessLogStream};





// admin_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODU0NDAyNDV9.U74N04r8xRr91iEZ8hTbcxWqaBu93FRtn0vlog_S_uw