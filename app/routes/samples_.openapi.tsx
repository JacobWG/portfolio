import SwaggerUI from "swagger-ui-react"
import "../swagger-ui.css"

export default function Swagger() {
    return (
        <SwaggerUI url="https://www.jacobwg.net/fleetdb.yaml" />
    )
};