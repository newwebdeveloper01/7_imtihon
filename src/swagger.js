import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";       
import { Router } from "express";
import { token } from "morgan";

    const router=Router();

    const swaggerDoc=swaggerJSDoc({
        swaggerDefinition:{
             openapi:'3.0.0',
             servers:[
                {
                    url:'http://localhost:5000',
                    title:'7-imtihon',
                    description:'7_imtihon api'
                }
             ],
             info:{
                version:'1.0.0',
                title:'7-imtihon 2',
                description:'7_imtihon api 2'
             },
             components:{
                securitySchemes:{
                    Bearer:{
                        type: 'apiKey',
                        name: 'token',
                        in: 'header'
                    }
                }
             }
        },
        apis:[
            `${process.cwd()}/src/swagger/components/*.yaml`,
            `${process.cwd()}/src/swagger/docs/*.yaml`

        ]
    })

    router.use('/' , SwaggerUi.serve , SwaggerUi.setup(swaggerDoc))

    export default router